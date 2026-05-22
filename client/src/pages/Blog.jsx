import { Link } from 'react-router-dom'
import { FaClock, FaTag } from 'react-icons/fa'
import './Blog.css'

const articles = [
    {
        title: 'Coming Soon',
        excerpt: 'We are working on exciting new content for you. Check back soon for expert articles and insights on your health journey.',
        category: 'Update',
        readTime: '-- min read',
        image: '/images/hero-food.png',
    },
    {
        title: 'Coming Soon',
        excerpt: 'We are working on exciting new content for you. Check back soon for expert articles and insights on your health journey.',
        category: 'Update',
        readTime: '-- min read',
        image: '/images/balanced-plate.png',
    },
    {
        title: 'Coming Soon',
        excerpt: 'We are working on exciting new content for you. Check back soon for expert articles and insights on your health journey.',
        category: 'Update',
        readTime: '-- min read',
        image: '/images/hero-food.png',
    },
]

export default function Blog() {
    return (
        <div className="blog-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">Blog</span>
                    <h1>Insights for Your <span className="text-gradient">Transformation</span></h1>
                    <p>
                        Expert articles and guides on running, mobility, nutrition, and mindset.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="section blog-articles">
                <div className="container">
                    <div className="blog__grid">
                        {articles.map((article, i) => (
                            <article key={i} className={`card blog__card animate-fade-in-up delay-${(i % 3) + 1}`}>
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
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
