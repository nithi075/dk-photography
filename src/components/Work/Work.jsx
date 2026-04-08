import { Link } from "react-router-dom";
import "./Work.css";

// Assets (Replace with your actual paths)
import weddingImg from "../../assets/wedding.jpeg";
import wedding2Img from "../../assets/wedding-2.jpeg";
import coupleImg from "../../assets/couple.jpeg";
import portraitImg from "../../assets/portrait.jpeg";
import candidImg from "../../assets/candid.jpeg";
import engagementImg from "../../assets/engagement.jpeg";
import receptionImg from "../../assets/reception.jpeg";
import brideImg from "../../assets/bride.jpeg";
import traditionalImg from "../../assets/traditional.jpeg";
import cinematicImg from "../../assets/cinematic.jpeg";

export default function Work() {
  const portfolio = [
    { src: weddingImg, className: "tall", label: "01", category: "Royal Portraits" },
    { src: portraitImg, className: "wide", label: "02", category: "Fine Art Series" },
    { src: coupleImg, className: "small", label: "03", category: "Eternal Bond" },
    { src: candidImg, className: "medium", label: "04", category: "Raw Emotions" },
    { src: wedding2Img, className: "tall", label: "05", category: "Luxury Cinematic" },
    { src: receptionImg, className: "wide", label: "06", category: "Grand Gala" },
    { src: engagementImg, className: "medium", label: "07", category: "The Promise" },
    { src: brideImg, className: "small", label: "08", category: "Bridal Grace" },
    { src: traditionalImg, className: "tall", label: "09", category: "Heritage Tales" },
    { src: cinematicImg, className: "wide", label: "10", category: "Dream Sequences" },
  ];

  return (
    <section className="work" id="work">
      <div className="work-container">
        
        <div className="work-header">
          <div className="work-tag-wrapper">
            <div className="tag-line"></div>
            <span className="work-tag">The Archive</span>
          </div>
          <h2 className="work-title">Captured <span className="accent-text">Legacies</span></h2>
          <p className="work-subtitle">A curated collection of soul-stirring frames and timeless cinematic stories.</p>
        </div>

        <div className="work-grid">
          {portfolio.map((item, index) => (
            <div className={`work-item ${item.className}`} key={index}>
              <div className="work-img-box">
                <img src={item.src} alt={item.category} loading="lazy" />
                <div className="work-overlay">
                  <div className="overlay-content">
                    <span className="work-num">{item.label}</span>
                    <h3 className="work-cat">{item.category}</h3>
                    <div className="work-view-btn">View Story</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="work-footer">
          <Link to="/gallery" className="btn-premium-work">
            <span>Explore Full Gallery</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}