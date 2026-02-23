import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wave">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,50 1440,40 L1440,100 L0,100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="footer__content">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand */}
                        <div className="footer__brand">
                            <img src="/SattvaResetLogo.jpeg" alt="Sattva Reset" className="footer__logo" />
                            <h3>Sattva Reset</h3>
                            <p>
                                Holistic health coaching focused on metabolic fitness, gut health,
                                and natural hormonal balance. Your journey to a vibrant, energized
                                life starts here.
                            </p>
                            <div className="footer__social">
                                <a href="https://wa.me/17034240537" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <FaWhatsapp />
                                </a>
                                <a href="mailto:sattvareset@gmail.com" aria-label="Email">
                                    <FaEnvelope />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer__col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/success-stories">Success Stories</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer__col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/services">Metabolic Fitness</Link></li>
                                <li><Link to="/services">Time-Restricted Eating</Link></li>
                                <li><Link to="/services">Gut Health & Detox</Link></li>
                                <li><Link to="/services">Hormonal Balance</Link></li>
                                <li><Link to="/services">Sleep Optimization</Link></li>
                                <li><Link to="/services">Body Recomposition</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer__col">
                            <h4>Get in Touch</h4>
                            <ul className="footer__contact">
                                <li>
                                    <FaEnvelope className="footer__icon" />
                                    <a href="mailto:sattvareset@gmail.com">sattvareset@gmail.com</a>
                                </li>
                                <li>
                                    <FaWhatsapp className="footer__icon" />
                                    <a href="https://wa.me/17034240537">+1 (703) 424-0537</a>
                                </li>
                            </ul>
                            <div className="footer__newsletter">
                                <p>Subscribe to our newsletter</p>
                                <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
                                    <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
                                    <button type="submit" className="btn btn-accent">Join</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p>© {new Date().getFullYear()} Sattva Reset. All rights reserved.</p>
                        <p className="footer__disclaimer">
                            Disclaimer: The information provided is for educational purposes only and is not intended as medical advice.
                            Always consult with a qualified healthcare professional before making changes to your diet or lifestyle.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
