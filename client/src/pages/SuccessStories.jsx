import { Link } from 'react-router-dom'
import { FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa'
import './SuccessStories.css'

const stories = [
    {
        name: 'Sarah M.',
        age: 42,
        duration: '4 months',
        result: 'Lost 25 lbs & reversed pre-diabetes',
        text: 'When I first came to Sattva Reset, I was exhausted, overweight, and my doctor had just told me I was pre-diabetic. Within 4 months, using time-restricted eating and a personalized nutrition plan, I lost 25 pounds and my blood sugar levels returned to normal. My energy levels are through the roof and I feel like I did in my 30s. This isn\'t just a diet — it\'s a complete lifestyle transformation.',
        metrics: ['25 lbs lost', 'A1C normalized', 'Energy +80%'],
        rating: 5,
    },
    {
        name: 'James R.',
        age: 55,
        duration: '6 months',
        result: 'Improved metabolic health & sleep',
        text: 'I was skeptical about health coaching, but the personalized approach made all the difference. My coach identified that my gut health was the root cause of my sleep issues and afternoon energy crashes. After 6 months of targeted nutrition and fasting protocols, I sleep deeply, wake refreshed, and have consistent energy all day. My cholesterol dropped 40 points without medication.',
        metrics: ['Cholesterol -40pts', 'Sleep quality improved', 'No more energy crashes'],
        rating: 5,
    },
    {
        name: 'Priya K.',
        age: 38,
        duration: '3 months',
        result: 'Hormonal balance & body recomposition',
        text: 'After two pregnancies, my hormones were completely off. I was gaining weight despite eating well and exercising. The bio-individual approach revealed I needed specific foods to support my hormonal recovery. In 3 months, I balanced my hormones naturally, lost the stubborn belly fat, and gained lean muscle. I feel like my younger self again!',
        metrics: ['Hormones balanced', '15 lbs body recomposition', 'Mood improved'],
        rating: 5,
    },
    {
        name: 'David L.',
        age: 48,
        duration: '5 months',
        result: 'Reversed fatty liver & lost 30 lbs',
        text: 'My doctor told me I had non-alcoholic fatty liver disease and needed to make serious changes. The detoxification and gut health protocol were game changers. Combined with strategic fasting, I reversed my fatty liver, lost 30 pounds, and my inflammation markers dropped to normal. I\'m genuinely healthier now than I was a decade ago.',
        metrics: ['Fatty liver reversed', '30 lbs lost', 'Inflammation markers normal'],
        rating: 5,
    },
    {
        name: 'Anita S.',
        age: 45,
        duration: '6 months',
        result: 'Autoimmune symptom relief & vitality',
        text: 'Living with an autoimmune condition, I had accepted fatigue and joint pain as my new normal. Through the food as medicine approach and careful gut healing protocol, my symptoms reduced by 70%. I can hike again, play with my kids, and cook without pain. This program gave me my life back.',
        metrics: ['Symptoms -70%', 'Active lifestyle restored', 'Gut health optimized'],
        rating: 5,
    },
    {
        name: 'Michael T.',
        age: 52,
        duration: '4 months',
        result: 'Blood pressure normalized & weight loss',
        text: 'I was on two blood pressure medications and felt defeated. With the metabolic fitness program and time-restricted eating, I\'ve reduced to one medication (with my doctor\'s supervision) and lost 20 pounds. My energy and mental clarity have improved dramatically. This is real, sustainable change.',
        metrics: ['BP medication reduced', '20 lbs lost', 'Mental clarity improved'],
        rating: 5,
    },
]

export default function SuccessStories() {
    return (
        <div className="stories-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">Success Stories</span>
                    <h1>Real Transformations from <span className="text-gradient">Real People</span></h1>
                    <p>
                        These are the stories of real clients who committed to resetting their health
                        and achieved remarkable results.
                    </p>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="section stories-grid-section">
                <div className="container">
                    <div className="stories__grid">
                        {stories.map((story, i) => (
                            <div key={i} className={`card stories__card animate-fade-in-up delay-${(i % 4) + 1}`}>
                                <FaQuoteLeft className="stories__quote-icon" />
                                <div className="stories__meta">
                                    <strong>{story.name}</strong>
                                    <span>Age {story.age} · {story.duration} program</span>
                                </div>
                                <h3 className="stories__result">{story.result}</h3>
                                <p className="stories__text">{story.text}</p>
                                <div className="stories__metrics">
                                    {story.metrics.map((m, j) => (
                                        <span key={j} className="stories__metric">{m}</span>
                                    ))}
                                </div>
                                <div className="stories__stars">
                                    {[...Array(story.rating)].map((_, j) => (
                                        <FaStar key={j} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container cta-section__inner">
                    <h2>Your Success Story Could Be Next</h2>
                    <p>
                        Join hundreds of people who have transformed their health with personalized coaching.
                    </p>
                    <Link to="/contact" className="btn btn-accent btn-lg">
                        Start Your Transformation <FaArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    )
}
