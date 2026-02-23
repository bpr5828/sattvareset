import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRouter from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
}))
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes
app.use('/api/contact', contactRouter)

// Local dev: start the server directly
// Vercel: export app as a serverless function (no listen needed)
if (process.env.LOCAL_DEV === 'true') {
    app.listen(PORT, () => {
        console.log(`🚀 Sattva Reset API running on port ${PORT}`)
    })
}

export default app
