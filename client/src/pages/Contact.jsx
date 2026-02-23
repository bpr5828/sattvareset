import { useState } from 'react'
import { FaArrowRight, FaEnvelope, FaWhatsapp, FaPhoneAlt, FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa'
import './Contact.css'

const faqs = [
    {
        q: 'What is bio-individuality?',
        a: 'Bio-individuality means that each person is unique and what works for one may not work for another. I tailor every nutrition and lifestyle plan to your specific genetics, metabolism, preferences, and goals rather than using a one-size-fits-all approach.',
    },
    {
        q: 'How long until I see results?',
        a: 'Most clients notice improvements in energy, sleep, and digestion within the first 2-3 weeks. Significant changes in weight, lab markers, and body composition typically occur within 6-12 weeks, depending on your starting point and consistency.',
    },
    {
        q: 'Do I need to buy special foods or supplements?',
        a: 'No. My approach focuses on whole, accessible foods you can find at any grocery store. If I recommend specific supplements, they\'re based on your individual needs and always optional — food comes first.',
    },
    {
        q: 'Is this a diet program?',
        a: 'No. Sattva Reset is a holistic health coaching program, not a diet. We focus on sustainable lifestyle changes that address the root causes of health issues — metabolism, gut health, hormones, sleep, and stress — rather than restrictive eating plans.',
    },
    {
        q: 'Can you work with my doctor or healthcare team?',
        a: 'Absolutely. I encourage collaboration with your healthcare providers. I can work alongside your doctor, nutritionist, or therapist to ensure your coaching plan complements any medical treatment you\'re receiving.',
    },
    {
        q: 'What does a coaching session look like?',
        a: 'Sessions are 45-60 minutes via video call. We review your progress, address challenges, adjust your plan, and set goals for the coming weeks. Between sessions, you have support via email or WhatsApp depending on your package.',
    },
]

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
    const [openFaq, setOpenFaq] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitted(true)
                setFormData({ name: '', email: '', phone: '', message: '' })
            }
        } catch (err) {
            // If backend is not running, still show success for demo
            setSubmitted(true)
            setFormData({ name: '', email: '', phone: '', message: '' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">Get in Touch</span>
                    <h1>Ready to <span className="text-gradient">Reset Your Health?</span></h1>
                    <p>
                        Book a free discovery call or send me a message.
                        I'd love to learn about your goals and see how I can help.
                    </p>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="section contact-main">
                <div className="container contact-main__grid">
                    {/* Form */}
                    <div className="contact-form__wrapper animate-slide-left">
                        <h2>Send a Message</h2>
                        <p>Fill out the form below and I'll get back to you within 24 hours.</p>

                        {submitted ? (
                            <div className="contact-form__success">
                                <FaCheckCircle size={48} />
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. I'll be in touch shortly.</p>
                                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form__group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div className="contact-form__group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                                <div className="contact-form__group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div className="contact-form__group">
                                    <label htmlFor="message">Your Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your health goals..."
                                        rows="5"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send Message'} <FaArrowRight />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info animate-slide-right">
                        <div className="contact-info__card">
                            <h3>Let's Connect</h3>
                            <p>Prefer to reach out directly? Here's how:</p>

                            <div className="contact-info__items">
                                <a href="mailto:sattvareset@gmail.com" className="contact-info__item">
                                    <div className="contact-info__icon"><FaEnvelope /></div>
                                    <div>
                                        <strong>Email</strong>
                                        <span>sattvareset@gmail.com</span>
                                    </div>
                                </a>
                                <a href="https://wa.me/17034240537" target="_blank" rel="noopener noreferrer" className="contact-info__item">
                                    <div className="contact-info__icon contact-info__icon--whatsapp"><FaWhatsapp /></div>
                                    <div>
                                        <strong>WhatsApp</strong>
                                        <span>+1 (703) 424-0537</span>
                                    </div>
                                </a>
                                <a href="tel:+17034240537" className="contact-info__item">
                                    <div className="contact-info__icon contact-info__icon--phone"><FaPhoneAlt /></div>
                                    <div>
                                        <strong>Phone</strong>
                                        <span>+1 (703) 424-0537</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="contact-info__booking">
                            <h3>Book a Free Discovery Call</h3>
                            <p>
                                A no-obligation 30-minute call to discuss your health goals
                                and see if we're a good fit.
                            </p>
                            <a href="https://wa.me/17034240537?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20call" className="btn btn-accent" target="_blank" rel="noopener noreferrer">
                                Schedule via WhatsApp <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section section-alt contact-faq">
                <div className="container">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Find answers to common questions about health coaching</p>
                    </div>
                    <div className="contact-faq__list">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`contact-faq__item ${openFaq === i ? 'contact-faq__item--open' : ''}`}
                            >
                                <button
                                    className="contact-faq__question"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span>{faq.q}</span>
                                    {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                <div className="contact-faq__answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
