import { Link } from 'react-router-dom'
import { FaArrowRight, FaClock, FaTag, FaDownload } from 'react-icons/fa'
import './Blog.css'

const articles = [
    {
        title: 'How Time-Restricted Eating Boosts Autophagy',
        excerpt: 'Discover how strategic eating windows trigger your body\'s powerful cellular cleanup process, leading to improved metabolism, reduced inflammation, and anti-aging benefits.',
        category: 'Fasting',
        readTime: '6 min read',
        image: '/images/balanced-plate.png',
    },
    {
        title: 'Gut Health 101: The Foundation of Total Wellness',
        excerpt: 'Your gut influences everything from mood to immunity. Learn the key signs of an unhealthy gut and the first steps to healing your microbiome naturally.',
        category: 'Gut & Detox',
        readTime: '8 min read',
        image: '/images/hero-food.png',
    },
    {
        title: 'Natural Ways to Balance Your Hormones Through Food',
        excerpt: 'Hormonal imbalances affect energy, weight, sleep, and mood. Explore which foods support estrogen, progesterone, and thyroid function without synthetic interventions.',
        category: 'Hormones',
        readTime: '7 min read',
        image: '/images/balanced-plate.png',
    },
    {
        title: 'The Metabolic Reset: Why Your Body Needs One',
        excerpt: 'Years of poor eating habits, stress, and inactivity can damage your metabolic function. Here\'s how a structured reset can restore your body\'s fat-burning potential.',
        category: 'Metabolic Health',
        readTime: '5 min read',
        image: '/images/hero-food.png',
    },
    {
        title: 'Sleep & Weight Loss: The Connection You\'re Missing',
        excerpt: 'Poor sleep doesn\'t just make you tired — it actively sabotages weight loss. Learn how optimizing sleep can accelerate your health transformation.',
        category: 'Sleep',
        readTime: '5 min read',
        image: '/images/balanced-plate.png',
    },
    {
        title: 'Building Your Perfect Plate: A Visual Guide',
        excerpt: 'Stop counting calories and start building balanced plates. This visual framework makes healthy eating intuitive, satisfying, and sustainable for the long term.',
        category: 'Nutrition',
        readTime: '4 min read',
        image: '/images/hero-food.png',
    },
]

const freeResources = [
    {
        title: 'Beginner\'s Guide to Time-Restricted Eating',
        desc: 'A step-by-step PDF to start your fasting journey safely and effectively.',
        type: 'PDF Guide',
    },
    {
        title: 'Plate Balancing Cheat Sheet',
        desc: 'A printable visual guide to building perfectly balanced meals every time.',
        type: 'Printable',
    },
    {
        title: '7-Day Gut Reset Meal Plan',
        desc: 'A complete week of gut-friendly recipes with shopping lists included.',
        type: 'Meal Plan',
    },
]

export default function Blog() {
    return (
        <div className="blog-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">Blog & Resources</span>
                    <h1>Insights for Your <span className="text-gradient">Health Journey</span></h1>
                    <p>
                        Expert articles, guides, and free resources to support your
                        transformation.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="section blog-articles">
                <div className="container">
                    <div className="blog__categories">
                        {['All', 'Metabolic Health', 'Fasting', 'Gut & Detox', 'Hormones', 'Sleep', 'Nutrition'].map((cat) => (
                            <button key={cat} className={`blog__cat-btn ${cat === 'All' ? 'blog__cat-btn--active' : ''}`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="blog__grid">
                        {articles.map((article, i) => (
                            <article key={i} className={`card blog__card animate-fade-in-up delay-${(i % 4) + 1}`}>
                                <div className="blog__card-image">
                                    <img src={article.image} alt={article.title} />
                                    <span className="blog__card-category">
                                        <FaTag /> {article.category}
                                    </span>
                                </div>
                                <div className="blog__card-content">
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <div className="blog__card-footer">
                                        <span className="blog__read-time">
                                            <FaClock /> {article.readTime}
                                        </span>
                                        <span className="blog__read-more">
                                            Read More <FaArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Resources */}
            <section className="section section-alt blog-resources">
                <div className="container">
                    <div className="section-header">
                        <h2>Free Resources</h2>
                        <p>Download these guides to kickstart your health transformation</p>
                    </div>
                    <div className="blog-resources__grid">
                        {freeResources.map((res, i) => (
                            <div key={i} className={`card blog-resources__card animate-fade-in-up delay-${i + 1}`}>
                                <div className="blog-resources__icon">
                                    <FaDownload />
                                </div>
                                <span className="blog-resources__type">{res.type}</span>
                                <h3>{res.title}</h3>
                                <p>{res.desc}</p>
                                <button className="btn btn-primary">
                                    Download Free <FaDownload />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section cta-section">
                <div className="container cta-section__inner">
                    <h2>Get Weekly Health Tips</h2>
                    <p>
                        Join our newsletter for exclusive articles, recipes, and wellness tips
                        delivered straight to your inbox.
                    </p>
                    <form className="blog-newsletter__form" onSubmit={e => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email address" aria-label="Email" />
                        <button type="submit" className="btn btn-accent btn-lg">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
