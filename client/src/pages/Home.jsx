import { Link } from 'react-router-dom'
import {
    FaHeartbeat, FaClock, FaLeaf, FaSeedling,
    FaArrowRight, FaStar, FaQuoteLeft
} from 'react-icons/fa'
import { GiMuscleUp, GiStomach } from 'react-icons/gi'
import './Home.css'

const valueProps = [
    {
        icon: <FaHeartbeat />,
        title: 'Metabolic Fitness',
        desc: 'Boost your metabolism naturally and improve how your body processes energy for sustained vitality.',
    },
    {
        icon: <FaClock />,
        title: 'Time-Restricted Eating',
        desc: 'Master fasting windows and unlock autophagy — your body\'s powerful cellular renewal process.',
    },
    {
        icon: <FaSeedling />,
        title: 'Hormonal Balance',
        desc: 'Restore natural hormonal harmony through strategic nutrition and lifestyle adjustments.',
    },
    {
        icon: <FaLeaf />,
        title: 'Gut Health & Detox',
        desc: 'Heal your gut, optimize digestion, and support your body\'s natural detoxification pathways.',
    },
]

const testimonials = [
    {
        name: 'Sarah M.',
        result: 'Lost 25 lbs in 4 months',
        text: 'Working with Sattva Reset completely transformed my relationship with food. I have more energy than I\'ve had in years and my lab results have improved dramatically.',
        rating: 5,
    },
    {
        name: 'James R.',
        result: 'Reversed pre-diabetes',
        text: 'The personalized approach made all the difference. I learned to eat for my unique body and the results speak for themselves. My doctor was amazed.',
        rating: 5,
    },
    {
        name: 'Priya K.',
        result: 'Energy through the roof',
        text: 'I was skeptical about fasting, but the gradual approach and constant support made the transition seamless. I feel like I\'m 10 years younger!',
        rating: 5,
    },
]

const services = [
    'Improve Metabolic Fitness',
    'Time-Restricted Eating & Fasting',
    'Optimize Eating Patterns',
    'Food as Medicine + Gut Health',
    'Sleep Optimization',
    'Body Recomposition',
]

export default function Home() {
    return (
        <div className="home">
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="hero__bg">
                    <img src="/images/hero-food.png" alt="" aria-hidden="true" />
                    <div className="hero__overlay" />
                </div>
                <div className="container hero__content">
                    <div className="hero__text animate-fade-in-up">
                        <span className="hero__badge">Holistic Health Coaching</span>
                        <h1>Reset Your Health,<br />Reclaim Your <span className="text-gradient">Energy</span></h1>
                        <p className="hero__subtitle">
                            Feel like your younger, vibrant self through personalized metabolic fitness,
                            gut health optimization, and natural hormonal balance coaching.
                        </p>
                        <div className="hero__actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Book Free Discovery Call <FaArrowRight />
                            </Link>
                            <Link to="/services" className="btn btn-secondary btn-lg">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero__scroll-indicator">
                    <div className="hero__scroll-dot" />
                </div>
            </section>

            {/* ===== VALUE PROPOSITIONS ===== */}
            <section className="section values">
                <div className="container">
                    <div className="section-header">
                        <h2>Transform Your Health Naturally</h2>
                        <p>A holistic approach to wellness that addresses the root causes, not just symptoms</p>
                    </div>
                    <div className="values__grid">
                        {valueProps.map((item, i) => (
                            <div key={i} className={`card values__card animate-fade-in-up delay-${i + 1}`}>
                                <div className="values__icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ABOUT SNIPPET ===== */}
            <section className="section section-alt about-snippet">
                <div className="container about-snippet__grid">
                    <div className="about-snippet__image animate-slide-left">
                        <img src="/images/coach-portrait.png" alt="Health Coach" />
                        <div className="about-snippet__accent" />
                    </div>
                    <div className="about-snippet__text animate-slide-right">
                        <span className="overline">Why I Do This</span>
                        <h2>Passionate About Helping You <span className="text-gradient">Thrive</span></h2>
                        <p>
                            I believe every person deserves to feel energized, vibrant, and confident in their body.
                            After witnessing my own health transformation through the power of food as medicine,
                            time-restricted eating, and holistic approaches, I knew I had to share this knowledge.
                        </p>
                        <p>
                            My approach is rooted in bio-individuality — because what works for one person may not
                            work for another. Together, we'll discover your unique metabolic blueprint and create a
                            sustainable path to your healthiest self.
                        </p>
                        <Link to="/about" className="btn btn-secondary">
                            Read My Full Story <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="section testimonials">
                <div className="container">
                    <div className="section-header">
                        <h2>Real Transformations</h2>
                        <p>Hear from people who have reset their health and reclaimed their lives</p>
                    </div>
                    <div className="testimonials__grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className={`card testimonials__card animate-fade-in-up delay-${i + 1}`}>
                                <FaQuoteLeft className="testimonials__quote-icon" />
                                <p className="testimonials__text">{t.text}</p>
                                <div className="testimonials__stars">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <FaStar key={j} />
                                    ))}
                                </div>
                                <div className="testimonials__author">
                                    <strong>{t.name}</strong>
                                    <span className="testimonials__result">{t.result}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES OVERVIEW ===== */}
            <section className="section section-warm services-overview">
                <div className="container">
                    <div className="section-header">
                        <h2>How I Can Help You</h2>
                        <p>Personalized coaching programs tailored to your unique needs</p>
                    </div>
                    <div className="services-overview__grid">
                        {services.map((s, i) => (
                            <Link to="/services" key={i} className="services-overview__item animate-fade-in-up delay-${i % 4 + 1}">
                                <GiStomach className="services-overview__icon" />
                                <span>{s}</span>
                                <FaArrowRight className="services-overview__arrow" />
                            </Link>
                        ))}
                    </div>
                    <div className="services-overview__cta">
                        <Link to="/services" className="btn btn-primary">
                            View All Services <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="section cta-section">
                <div className="container cta-section__inner">
                    <h2>Ready to Transform Your Health?</h2>
                    <p>
                        Take the first step toward a healthier, more energized you.
                        Book a free discovery call and let's create your personalized reset plan.
                    </p>
                    <div className="cta-section__actions">
                        <Link to="/contact" className="btn btn-accent btn-lg">
                            Book Free Discovery Call <FaArrowRight />
                        </Link>
                        <a href="https://wa.me/17034240537" className="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
