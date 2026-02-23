import { Link } from 'react-router-dom'
import { FaArrowRight, FaLeaf, FaHeart, FaSeedling, FaCheckCircle } from 'react-icons/fa'
import './About.css'

const qualifications = [
    'Certified Health & Wellness Coach',
    'Nutrition Science & Food as Medicine',
    'Time-Restricted Eating & Fasting Protocols',
    'Metabolic Health & Hormonal Balance',
    'Gut Health & Detoxification',
    'Bio-Individual Coaching Methods',
]

const philosophy = [
    {
        icon: <FaSeedling />,
        title: 'Bio-Individuality',
        desc: 'Every person is unique. What works for one may not work for another. I tailor each plan to your specific needs, lifestyle, and goals.',
    },
    {
        icon: <FaLeaf />,
        title: 'Food as Medicine',
        desc: 'The right foods can heal, energize, and transform your body. I help you harness the therapeutic power of whole, nutrient-dense nutrition.',
    },
    {
        icon: <FaHeart />,
        title: 'Holistic Approach',
        desc: 'True health goes beyond diet. We address metabolism, gut health, sleep, hormones, stress, and movement as an interconnected system.',
    },
]

export default function About() {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">About Sattva Reset</span>
                    <h1>Helping You Reset to Your <span className="text-gradient">Healthiest Self</span></h1>
                    <p>
                        Discover the story behind Sattva Reset and why I'm passionate
                        about helping you reclaim your vitality through holistic health coaching.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section about-story">
                <div className="container about-story__grid">
                    <div className="about-story__image animate-slide-left">
                        <img src="/images/coach-portrait.png" alt="Health Coach" />
                    </div>
                    <div className="about-story__text animate-slide-right">
                        <span className="overline">My Story</span>
                        <h2>From Personal Transformation to Helping Others</h2>
                        <p>
                            My journey into health coaching began with my own struggle. For years, I battled
                            low energy, stubborn weight, and hormonal imbalances that traditional approaches
                            couldn't solve. It wasn't until I discovered the power of metabolic fitness,
                            time-restricted eating, and gut health optimization that everything changed.
                        </p>
                        <p>
                            The transformation was so profound — not just physically, but mentally and
                            emotionally — that I knew I had to dedicate my life to helping others experience
                            the same breakthrough. I invested years studying nutrition science, fasting protocols,
                            and holistic health to bring you an evidence-inspired, deeply personalized approach.
                        </p>
                        <p>
                            Today, I've helped hundreds of clients reverse health issues, shed unwanted weight,
                            and rediscover the energy and vitality of their younger selves. Every success story
                            fuels my passion to keep going.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section section-alt about-philosophy">
                <div className="container">
                    <div className="section-header">
                        <h2>My Coaching Philosophy</h2>
                        <p>Three core principles guide every coaching relationship</p>
                    </div>
                    <div className="about-philosophy__grid">
                        {philosophy.map((item, i) => (
                            <div key={i} className={`card about-philosophy__card animate-fade-in-up delay-${i + 1}`}>
                                <div className="about-philosophy__icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Qualifications */}
            <section className="section about-qualifications">
                <div className="container about-qualifications__grid">
                    <div className="about-qualifications__text">
                        <span className="overline">Credentials</span>
                        <h2>Qualifications & Training</h2>
                        <p>
                            I'm committed to continuous learning to bring you the most effective,
                            science-backed strategies for optimal health.
                        </p>
                        <ul className="about-qualifications__list">
                            {qualifications.map((q, i) => (
                                <li key={i}>
                                    <FaCheckCircle className="about-qualifications__check" />
                                    <span>{q}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="about-qualifications__image">
                        <img src="/images/balanced-plate.png" alt="Healthy food" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container cta-section__inner">
                    <h2>If My Approach Resonates, Let's Connect</h2>
                    <p>
                        Whether you're just starting your health journey or looking to break through a plateau,
                        I'd love to learn about your goals and see how I can help.
                    </p>
                    <Link to="/contact" className="btn btn-accent btn-lg">
                        Book a Free Discovery Call <FaArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    )
}
