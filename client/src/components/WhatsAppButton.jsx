import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/17034240537"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            aria-label="Chat on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            <FaWhatsapp size={28} />
            <span className="whatsapp-btn__tooltip">Chat with us!</span>
        </a>
    )
}
