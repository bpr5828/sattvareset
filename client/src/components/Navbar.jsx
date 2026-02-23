import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/success-stories', label: 'Success Stories' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <Link to="/" className="navbar__brand">
                    <img src="/SattvaResetLogo.jpeg" alt="Sattva Reset" className="navbar__logo" />
                    <div className="navbar__brand-text">
                        <span className="navbar__brand-name">Sattva Reset</span>
                        <span className="navbar__brand-tagline">Health . Fitness . Diet Coaching</span>
                    </div>
                </Link>

                <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className="navbar__cta-mobile">
                        <Link to="/contact" className="btn btn-primary">Book a Call</Link>
                    </li>
                </ul>

                <Link to="/contact" className="btn btn-primary navbar__cta-desktop">
                    Book a Call
                </Link>

                <button
                    className="navbar__toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {isOpen && <div className="navbar__overlay" onClick={() => setIsOpen(false)} />}
        </nav>
    )
}
