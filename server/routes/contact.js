import express from 'express'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const router = express.Router()

// --- Google Sheets Integration ---
async function appendToSheet(data) {
    const { name, email, phone, message } = data

    // Check if credentials are configured
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        console.log('⚠️  Google Sheets not configured — skipping sheet append')
        console.log('📋 Contact data:', { name, email, phone, message })
        return
    }

    const auth = new google.auth.JWT(
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        null,
        process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        ['https://www.googleapis.com/auth/spreadsheets']
    )

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_ID,
        range: 'Sheet1!A:E',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [[
                new Date().toISOString(),
                name,
                email,
                phone || 'N/A',
                message,
            ]],
        },
    })

    console.log('✅ Contact appended to Google Sheet')
}

// --- Email Notification ---
async function sendEmails(data) {
    const { name, email, phone, message } = data

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log('⚠️  Email not configured — skipping email send')
        return
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    // Email to Sattva Reset
    await transporter.sendMail({
        from: `"Sattva Reset Website" <${process.env.EMAIL_USER}>`,
        to: 'sattvareset@gmail.com',
        subject: `New Contact Request from ${name}`,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2D6A4F;">New Contact Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; color: #4A4A5A;">Name:</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #4A4A5A;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #4A4A5A;">Phone:</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #4A4A5A;">Message:</td><td style="padding: 8px;">${message}</td></tr>
        </table>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #888; font-size: 12px;">Submitted via sattvareset.com contact form</p>
      </div>
    `,
    })

    // Confirmation email to the requester
    await transporter.sendMail({
        from: `"Sattva Reset" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Thank you for contacting Sattva Reset!',
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <img src="https://sattvareset.com/SattvaResetLogo.jpeg" alt="Sattva Reset" style="width: 80px; margin-bottom: 16px;" />
        <h2 style="color: #2D6A4F;">Thank You, ${name}!</h2>
        <p>Thank you for reaching out to Sattva Reset. I've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li><a href="https://wa.me/17034240537" style="color: #25D366;">Chat with me on WhatsApp</a></li>
          <li><a href="https://sattvareset.com/blog" style="color: #2D6A4F;">Read our health blog</a></li>
          <li><a href="https://sattvareset.com/services" style="color: #2D6A4F;">Explore our services</a></li>
        </ul>
        <p>To your health,<br /><strong>Sattva Reset Team</strong></p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #888; font-size: 11px;">Health . Fitness . Diet Coaching | sattvareset.com</p>
      </div>
    `,
    })

    console.log('✅ Emails sent successfully')
}

// --- POST /api/contact ---
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Name, email, and message are required.',
            })
        }

        // Run both integrations (don't fail if one errors)
        const results = await Promise.allSettled([
            appendToSheet({ name, email, phone, message }),
            sendEmails({ name, email, phone, message }),
        ])

        const errors = results
            .filter(r => r.status === 'rejected')
            .map(r => r.reason?.message || 'Unknown error')

        if (errors.length > 0) {
            console.error('⚠️  Some integrations failed:', errors)
        }

        res.json({
            success: true,
            message: 'Your message has been received! We\'ll be in touch soon.',
        })
    } catch (error) {
        console.error('❌ Contact endpoint error:', error)
        res.status(500).json({
            success: false,
            error: 'Something went wrong. Please try again or contact us via WhatsApp.',
        })
    }
})

export default router
