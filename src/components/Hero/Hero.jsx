import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"  
  ];

  const whatsappLink = `https://wa.me/919751478600?text=${encodeURIComponent("Hello StudioIn Weddings, I'm interested in booking a cinematic photography session.")}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <span className="hero-label">The Art of Framing Soul</span>
        <h1 className="hero-title">
          Where <span className="logo-script">Dhilip</span> Frames the <br />
          <span className="accent-text">Unforgettable Memory</span>
        </h1>

        <p className="hero-description">
          Cinematic vision meeting authentic heartbeats. We frame the soul of your legacy.
        </p>

        <div className="hero-actions">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-premium">
            Frame Memory
          </a>
          <a href="#work" className="btn-outline">
            Our Stories
          </a>
        </div>

        <div className="slide-dots">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"><div className="wheel"></div></div>
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  ); 
}