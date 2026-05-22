import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    FaRunning, FaUtensils, FaLeaf, FaWind,
    FaDumbbell, FaUsers, FaArrowRight,
    FaChevronDown, FaChevronUp, FaCheckCircle
} from 'react-icons/fa'
import './Services.css'

const offerings = [
    {
        icon: <FaRunning />,
        title: 'Running Programs',
        desc: 'Structured group runs and endurance training for all experience levels.',
    },
    {
        icon: <FaUtensils />,
        title: 'Nutrition Coaching',
        desc: 'Learn sustainable eating habits that fuel performance, recovery, energy, and long-term health.',
    },
    {
        icon: <FaLeaf />,
        title: 'Yoga & Mobility Training',
        desc: 'Improve flexibility, balance, posture, recovery, and overall movement quality.',
    },
    {
        icon: <FaWind />,
        title: 'Breathwork Training',
        desc: 'Develop better breathing patterns to improve endurance, focus, recovery, and stress management.',
    },
    {
        icon: <FaDumbbell />,
        title: 'Bodyweight Strength Training',
        desc: 'Build functional strength, stability, coordination, and athletic performance using your own body.',
    },
    {
        icon: <FaUsers />,
        title: 'Accountability & Community',
        desc: 'Surround yourself with people committed to growth, discipline, and positive change.',
    },
]

const packages = [
    {
        name: 'Foundation Membership',
        tagline: 'Start Your Journey',
        features: [
            'Access to all group runs',
            'Weekly accountability check-ins',
            'Basic nutrition guidelines',
            'Community forum access',
        ],
        highlighted: false,
    },
    {
        name: 'Transformation Program',
        tagline: 'Most Popular',
        features: [
            'Everything in Foundation',
            'Personalized nutrition plan',
            'Mobility & yoga sessions',
            'Breathwork workshops',
            'Direct coach access',
        ],
        highlighted: true,
    },
]

export default function Services() {
    // Accordion state removed as it's now a grid of cards

    return (
        <div className="services-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">What We Offer</span>
                    <h1>Train For Life. <span className="text-gradient">Not Just Race Day.</span></h1>
                    <p>
                        Comprehensive training programs combining endurance, strength, mobility, and nutrition to build a stronger you.
                    </p>
                </div>
            </section>

            {/* Offerings */}
            <section className="services-focus" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '1rem' }}>
                        <h2>Our Core Pillars</h2>
                    </div>
                    <div className="services-focus__grid">
                        {offerings.map((area, i) => (
                            <div key={i} className="services-focus__card">
                                <div className="services-focus__icon">{area.icon}</div>
                                <div>
                                    <h3>{area.title}</h3>
                                    <p>{area.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="services-packages" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '1rem', marginTop: '2rem' }}>
                        <h2>Memberships & Programs</h2>
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
                                    Join Now <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}
