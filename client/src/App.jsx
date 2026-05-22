import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './App.css'

function App() {
    return (
        <div className="app">
            <ScrollToTop />
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
