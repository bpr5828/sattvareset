import { Link } from 'react-router-dom'
import {
    FaHeartbeat, FaRunning, FaMountain, FaHandsHelping,
    FaDumbbell, FaDoorOpen, FaChild, FaArrowRight, FaCheckCircle
} from 'react-icons/fa'
import './Home.css'

const freedomCards = [
    {
        letter: 'F',
        title: 'Fitness',
        icon: <FaHeartbeat />,
        desc: 'Build total-body health through intentional movement, strength, conditioning, and wellness practices.',
    },
    {
        letter: 'R',
        title: 'Running',
        icon: <FaRunning />,
        desc: 'Running is the foundation of our community — improving endurance, confidence, discipline, and mental toughness.',
    },
    {
        letter: 'E',
        title: 'Endurance',
        icon: <FaMountain />,
        desc: 'Develop the resilience to push through challenges in training and in life.',
    },
    {
        letter: 'E',
        title: 'Empathy',
        icon: <FaHandsHelping />,
        desc: 'We support one another, encourage growth, and create a community where everybody belongs.',
    },
    {
        letter: 'D',
        title: 'Discipline',
        icon: <FaDumbbell />,
        desc: 'Consistency creates transformation. Small daily actions lead to long-term success.',
    },
    {
        letter: 'O',
        title: 'Opportunity',
        icon: <FaDoorOpen />,
        desc: 'Every workout, every mile, and every challenge is an opportunity to grow stronger physically and mentally.',
    },
    {
        letter: 'M',
        title: 'Mobility',
        icon: <FaChild />,
        desc: 'Movement is freedom. We prioritize flexibility, recovery, injury prevention, posture, and longevity.',
    },
]

const thisIsForYou = [
    'You want to become healthier and stronger',
    'You’re looking for motivation and accountability',
    'You want to improve your running endurance',
    'You want guidance on nutrition and recovery',
    'You’re ready to build discipline and confidence',
    'You want a supportive community that grows together',
    'You believe fitness should transform your entire lifestyle',
]

export default function Home() {
    return (
        <div className="home">
            {/* ===== HERO ===== */}
            <section className="page-hero">
                <div className="container animate-fade-in-up">
                    <span className="overline">Freedom Running Club</span>
                    <h1>Transform Your Body. Strengthen Your Mind. <span className="text-gradient">Discover Your Freedom.</span></h1>
                </div>
            </section>

            <section style={{ padding: '1.5rem 0 0.5rem' }}>
                <div className="container">
                    <div className="quote-cards__grid">
                        <div className="quote-card">
                            <p>&ldquo;Freedom Running Club is more than a running group. It's a complete transformation platform designed to help people move better, live healthier, think stronger, and grow together.&rdquo;</p>
                        </div>
                        <div className="quote-card">
                            <p>&ldquo;Through running, mobility, nutrition, breathwork, yoga, and functional strength training, we help individuals unlock the strongest version of themselves.&rdquo;</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHAT FREEDOM MEANS ===== */}
            <section className="section freedom-cards-section">
                <div className="container">
                    <div className="section-header">
                        <h2>What <span className="text-gradient">FREEDOM</span> Means</h2>
                        <p>The core pillars of our community</p>
                    </div>
                    <div className="freedom-cards__grid">
                        {freedomCards.map((item, i) => (
                            <div key={i} className={`card freedom-card animate-fade-in-up delay-${i + 1}`}>
                                <div className="freedom-card__header">
                                    <span className="freedom-card__letter">{item.letter}</span>
                                    <div className="freedom-card__icon">{item.icon}</div>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MISSION ===== */}
            <section className="section section-warm">
                <div className="container">
                    <div className="mission-card">
                        <h2>Our Mission</h2>
                        <p>
                            To empower people through movement, education, and community by creating a space where fitness becomes a pathway to freedom, confidence, health, and purpose.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== THIS IS FOR YOU IF ===== */}
            <section className="section this-is-for-you">
                <div className="container">
                    <div className="section-header">
                        <h2>This Is For You If...</h2>
                    </div>
                    <div className="for-you__grid">
                        {thisIsForYou.map((item, i) => (
                            <div key={i} className="for-you__item card">
                                <FaCheckCircle className="check-icon" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== JOIN THE MOVEMENT CTA ===== */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-section__inner">
                        <h2>Join The Movement</h2>
                        <p className="cta-section__tagline">
                            Freedom is earned one step, one breath, and one decision at a time.
                        </p>
                        <p>
                            At Freedom Running Club, we don't just train runners.<br />
                            <strong>We build stronger humans.</strong>
                        </p>
                        <p className="cta-section__acronym">
                            FITNESS · RUNNING · ENDURANCE · EMPATHY · DISCIPLINE · OPPORTUNITY · MOBILITY
                        </p>
                        <h3>Run Free. Move Better. Live Stronger.</h3>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/services" className="btn btn-accent">
                                Explore Programs <FaArrowRight />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                                Start My Journey <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
