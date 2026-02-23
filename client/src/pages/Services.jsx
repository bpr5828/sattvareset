import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    FaHeartbeat, FaClock, FaUtensils, FaLeaf, FaSeedling,
    FaBed, FaDumbbell, FaFingerprint, FaArrowRight,
    FaChevronDown, FaChevronUp, FaCheckCircle
} from 'react-icons/fa'
import { GiStomach, GiMedicines } from 'react-icons/gi'
import './Services.css'

const focusAreas = [
    {
        icon: <FaHeartbeat />,
        title: 'Improve Metabolic Fitness',
        desc: 'Optimize how your body generates and uses energy. We\'ll work on improving insulin sensitivity, blood sugar regulation, and overall metabolic efficiency so your body burns fuel more effectively throughout the day.',
    },
    {
        icon: <FaClock />,
        title: 'Time-Restricted Eating & Fasting',
        desc: 'Learn to harness the power of strategic eating windows. Time-restricted eating triggers autophagy — your body\'s cellular renewal process — leading to improved metabolism, mental clarity, and cellular repair.',
    },
    {
        icon: <FaUtensils />,
        title: 'Optimize Eating Patterns & Balance Your Plate',
        desc: 'Discover the ideal macronutrient ratios and meal timing for your unique body. We\'ll create a balanced plate approach that satisfies, nourishes, and supports your specific health goals.',
    },
    {
        icon: <FaSeedling />,
        title: 'Qualitize Your Food Choices',
        desc: 'Focus on food quality over strict calorie counting. Learn to choose nutrient-dense whole foods that fuel your body optimally — no deprivation, no fads, just real food that heals.',
    },
    {
        icon: <GiMedicines />,
        title: 'Food as Medicine + Gut Health',
        desc: 'Your gut is your second brain. We\'ll use targeted nutrition to heal your gut lining, balance your microbiome, and leverage food\'s therapeutic properties for systemic health improvements.',
    },
    {
        icon: <FaLeaf />,
        title: 'Detoxification Support',
        desc: 'Support your body\'s natural detox pathways through strategic nutrition, hydration, and lifestyle modifications. A well-functioning detox system is essential for hormonal balance and energy.',
    },
    {
        icon: <FaBed />,
        title: 'Sleep Optimization',
        desc: 'Quality sleep is the foundation of health. We\'ll address nutrition timing, supplements, and habits that promote deep, restorative sleep for better recovery, mood, and metabolic function.',
    },
    {
        icon: <GiStomach />,
        title: 'Hormonal Balance Through Natural Eating',
        desc: 'Balance estrogen, progesterone, testosterone, thyroid hormones, and cortisol through precision nutrition. No synthetic interventions — just the power of the right foods at the right times.',
    },
    {
        icon: <FaDumbbell />,
        title: 'Body Recomposition',
        desc: 'Achieve sustainable fat loss while building lean muscle. We combine strategic nutrition with movement guidance for a body composition transformation that lasts — not a crash diet.',
    },
    {
        icon: <FaFingerprint />,
        title: 'Bio-Individuality',
        desc: 'Your plan is uniquely yours. Through careful assessment and ongoing refinement, we\'ll discover exactly what your body needs to thrive — because cookie-cutter approaches don\'t create lasting results.',
    },
    {
        icon: <FaHeartbeat />,
        title: 'Reset Your Health to Your Younger Self',
        desc: 'The overarching promise: feel vibrant, energized, and strong like you did years ago. By addressing all aspects of your health holistically, you\'ll experience a total reset that turns back the clock.',
    },
]

const steps = [
    {
        num: '01',
        title: 'Discovery Call',
        desc: 'A free 30-minute call to understand your health goals, challenges, and what you\'re looking for in a coaching relationship.',
    },
    {
        num: '02',
        title: 'Health Assessment',
        desc: 'A comprehensive review of your current health status, eating patterns, lifestyle, lab work, and personal history.',
    },
    {
        num: '03',
        title: 'Personalized Plan',
        desc: 'Your custom roadmap — including nutrition protocols, fasting schedules, supplement guidance, and lifestyle modifications.',
    },
    {
        num: '04',
        title: 'Ongoing Support',
        desc: 'Regular coaching sessions, progress tracking, plan adjustments, and unlimited messaging support between sessions.',
    },
]

const packages = [
    {
        name: '3-Month Reset',
        tagline: 'Foundation Program',
        features: [
            'Initial health assessment',
            'Personalized nutrition plan',
            'Bi-weekly coaching sessions',
            'Fasting protocol guidance',
            'Email support',
            'Recipe collection',
        ],
        highlighted: false,
    },
    {
        name: '6-Month Transformation',
        tagline: 'Most Popular',
        features: [
            'Everything in 3-Month Reset',
            'Weekly coaching sessions',
            'Gut health protocol',
            'Hormonal balance program',
            'WhatsApp support',
            'Supplement guidance',
            'Lab work review',
            'Meal planning tools',
        ],
        highlighted: true,
    },
    {
        name: 'Ongoing Partnership',
        tagline: 'For Sustained Results',
        features: [
            'Everything in 6-Month',
            'Flexible session scheduling',
            'Priority support',
            'Quarterly health reviews',
            'Advanced protocols',
            'Lifestyle optimization',
        ],
        highlighted: false,
    },
]

export default function Services() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (i) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <div className="services-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">Services</span>
                    <h1>Personalized Health Coaching to <span className="text-gradient">Reset Your Body & Life</span></h1>
                    <p>
                        Evidence-inspired, holistic programs tailored to your unique biology,
                        goals, and lifestyle.
                    </p>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="section services-focus">
                <div className="container">
                    <div className="section-header">
                        <h2>Core Focus Areas</h2>
                        <p>Click on any area to learn more about how it can transform your health</p>
                    </div>
                    <div className="services-focus__list">
                        {focusAreas.map((area, i) => (
                            <div
                                key={i}
                                className={`services-focus__item ${openIndex === i ? 'services-focus__item--open' : ''}`}
                            >
                                <button
                                    className="services-focus__header"
                                    onClick={() => toggleAccordion(i)}
                                    aria-expanded={openIndex === i}
                                >
                                    <div className="services-focus__icon">{area.icon}</div>
                                    <h3>{area.title}</h3>
                                    {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                <div className="services-focus__body">
                                    <p>{area.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section section-alt services-process">
                <div className="container">
                    <div className="section-header">
                        <h2>How It Works</h2>
                        <p>A simple, supportive process to guide your transformation</p>
                    </div>
                    <div className="services-process__grid">
                        {steps.map((step, i) => (
                            <div key={i} className={`services-process__step animate-fade-in-up delay-${i + 1}`}>
                                <span className="services-process__num">{step.num}</span>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="section services-packages">
                <div className="container">
                    <div className="section-header">
                        <h2>Programs & Packages</h2>
                        <p>Choose the program that fits your goals and timeline</p>
                    </div>
                    <div className="services-packages__grid">
                        {packages.map((pkg, i) => (
                            <div
                                key={i}
                                className={`card services-packages__card ${pkg.highlighted ? 'services-packages__card--featured' : ''}`}
                            >
                                {pkg.highlighted && <span className="services-packages__badge">Most Popular</span>}
                                <h3>{pkg.name}</h3>
                                <span className="services-packages__tagline">{pkg.tagline}</span>
                                <ul>
                                    {pkg.features.map((f, j) => (
                                        <li key={j}>
                                            <FaCheckCircle />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className={`btn ${pkg.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                                    Get Started <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container cta-section__inner">
                    <h2>Not Sure Which Program Is Right for You?</h2>
                    <p>Book a free discovery call and we'll find the perfect fit together.</p>
                    <Link to="/contact" className="btn btn-accent btn-lg">
                        Book Free Discovery Call <FaArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    )
}
