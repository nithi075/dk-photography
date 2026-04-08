import { useState, useEffect } from "react";
import "./Navbar.css";
import logoImg from "../../assets/logo.png"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Lock for Mobile Menu
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "nav-scrolled" : ""} ${menuOpen ? "nav-active" : ""}`}>
        <div className="nav-container">
          
          {/* Logo Section */}
          <a href="#hero" className="nav-brand" onClick={() => setMenuOpen(false)}>
            <div className="logo-holder">
               <img src={logoImg} alt="Dhilip Kumar Photography" className="brand-logo-img" />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="nav-links">
            <a href="#hero" className="nav-item">Home</a>
            <a href="#about" className="nav-item">The Studio</a>
            <a href="#work" className="nav-item">Portfolio</a>
            <a href="#contact" className="nav-cta">Book Now</a>
          </div>

          {/* Hamburger Toggle */}
          <button 
            className={`menu-toggle ${menuOpen ? "open" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="hamburger">
              <span className="line-t"></span>
              <span className="line-m"></span>
              <span className="line-b"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Overlay */}
      <div className={`mobile-overlay ${menuOpen ? "show" : ""}`}>
        <div className="overlay-bg-text">DK</div>
        
        <div className="mobile-links">
          <a href="#hero" style={{ "--i": 1 }} onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" style={{ "--i": 2 }} onClick={() => setMenuOpen(false)}>The Studio</a>
          <a href="#work" style={{ "--i": 3 }} onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#contact" style={{ "--i": 4 }} className="gold-link" onClick={() => setMenuOpen(false)}>
            Book Now
          </a>
        </div>

        <div className="mobile-footer">
          <p>TIRUCHIRAPPALLI • TAMIL NADU</p>
          <div className="social-mini">INSTAGRAM • WHATSAPP</div>
        </div>
      </div>
    </>
  );
}