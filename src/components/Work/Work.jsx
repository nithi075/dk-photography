import { Link } from "react-router-dom";
import "./Work.css";

// உங்க actual file names-உடன் imports
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
    { src: weddingImg, className: "img1" },
    { src: candidImg, className: "img4" },
    { src: portraitImg, className: "img3" },
    { src: coupleImg, className: "img2" },
    { src: wedding2Img, className: "img5" },
    { src: engagementImg, className: "img6" },
    { src: receptionImg, className: "img7" },
    { src: brideImg, className: "img8" },
    { src: traditionalImg, className: "img9" },
    { src: cinematicImg, className: "img10" },
  ];

  return (
    <section className="work" id="work">
      <span className="section-small">PORTFOLIO</span>
      <h2>Selected Work</h2>
      
      <div className="editorial-grid">
        {portfolio.map((item, index) => (
          <div className={`img ${item.className}`} key={index}>
            <img 
              src={item.src} 
              alt={`MV Photography ${item.category}`}
              loading="lazy"
            />
            <div className="overlay">{item.category}</div>
          </div>
        ))}
      </div>

      <Link to="/gallery">
        <button className="view-more">View More</button>
      </Link>
    </section>
  );
}