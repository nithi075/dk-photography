import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        
        {/* Left Side: Brand Philosophy */}
        <div className="about-header">
          <span className="about-tag">Est. 2018 — The Dhilip Kumar Signature</span>
          <h2 className="about-main-title">
            Where <span className="accent-italic">Artistry</span> meets <br />
            your <span className="accent-italic">Authenticity</span>.
          </h2>
        </div>

        {/* Right Side: Deep Content */}
        <div className="about-details">
          <div className="about-text-group">
            <p className="about-lead">
              At DK Photography, we don’t just capture images; we archive emotions. 
              We believe your legacy isn't written in a book, but in the silent heartbeats 
              of your most precious moments.
            </p>
            <p className="about-body">
              Specializing in premium wedding cinematography across the heritage landscapes of 
              Tamil Nadu, our lens focuses on the unscripted—the raw, the rare, and the radiant. 
              Under the creative vision of Dhilip Kumar, we transform your "once-in-a-lifetime" 
              into a timeless cinematic masterpiece.
            </p>
          </div>

          {/* New Grid for Philosophy */}
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">Timeless</span>
              <span className="stat-label">Beyond Trends</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Bespoke</span>
              <span className="stat-label">Tailored Vision</span>
            </div>
          </div>

          <div className="about-footer">
            <div className="signature-line"></div>
            <div className="footer-meta">
              <span className="signature-text">DK Photography</span>
              <p className="loc-text">Trichy • Madurai • Chennai</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}