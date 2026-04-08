import "./Contact.css";

export default function Contact() {
  const whatsappNumber = "919659414250"; 
  const message = "Hello StudioIn Weddings, I'm interested in your services. Can we discuss further?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        
        {/* TOP SECTION */}
        <div className="contact-header">
          <div className="contact-tag-wrapper">
            <div className="tag-line-short"></div>
            <span className="contact-tag">Inquiry</span>
          </div>
          <h2 className="contact-title">
            Let’s archive <br /> 
            your <span className="accent-italic">Legacy</span> together.
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="contact-grid">
          
          {/* Left: Detailed Info */}
          <div className="contact-details">
            <div className="detail-group">
              <span className="detail-label">Digital Presence</span>
              <a href="mailto:hello@studioinweddings.com" className="detail-link">dkphotography@gmail.com </a>
              <a href="tel:+919659414250" className="detail-link">+91 96594 14250</a>
            </div>

            <div className="detail-group">
              <span className="detail-label">Our Base</span>
              <p className="detail-text">Trichy • Madurai • Chennai<br/> Tamil Nadu, India</p>
            </div>

            <div className="detail-group">
              <span className="detail-label">Social Archive</span>
              <div className="social-links-grid">
                <a href="https://www.instagram.com/jeno_photography" target="_blank" rel="noopener noreferrer" className="social-item">Instagram</a>
                <a href="#" className="social-item">Facebook</a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-item">WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Right: Premium Booking Card */}
          <div className="booking-card">
            <div className="card-inner">
              <div className="booking-status">
                <div className="pulse-dot"></div>
                <span>Limited 2026 Slots Available</span>
              </div>
              <h3 className="card-title">Ready to tell your story?</h3>
              <p className="card-desc">We curate bespoke cinematic experiences for discerning couples.</p>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-premium">
                <span>Secure Your Date</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            {/* Subtle Copper Glow Background */}
            <div className="card-glow"></div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="contact-bottom">
          <div className="bottom-divider"></div>
          <div className="footer-meta">
            <p className="copyright-text">© 2026 DK Photography — Signature Collective</p>
        
          </div>
        </div>

      </div>
    </section>
  );
}