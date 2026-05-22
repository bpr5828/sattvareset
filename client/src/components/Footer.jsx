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
                            <img src="/SattvaResetLogo3.jpeg" alt="Sattva Reset" className="footer__logo" />
                            <h3>Sattva Reset</h3>
                            <p>
                                A complete transformation platform designed to help you move better, live healthier, think stronger, and grow together. Your journey to freedom starts here.
                            </p>
                            <div className="footer__social">
                                <a href="https://wa.me/17034240537" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <FaWhatsapp />
                                </a>
                                <a href="mailto:sattvareset@gmail.com" aria-label="Email">
                                    <FaEnvelope />
                                </a>
                                <a href="https://www.instagram.com/sattvareset?igsh=bWlzaXQ3dTNkem5l&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
                                <li><Link to="/services">What We Offer</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* What We Offer */}
                        <div className="footer__col">
                            <h4>What We Offer</h4>
                            <ul>
                                <li><Link to="/services">Running Programs</Link></li>
                                <li><Link to="/services">Nutrition Coaching</Link></li>
                                <li><Link to="/services">Yoga & Mobility</Link></li>
                                <li><Link to="/services">Breathwork Training</Link></li>
                                <li><Link to="/services">Strength Training</Link></li>
                                <li><Link to="/services">Community</Link></li>
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
