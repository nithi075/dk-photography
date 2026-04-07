import React from "react";
import "./Gallery.css";

// Assets
import wedding from "../assets/wedding1.jpeg";
import wedding2 from "../assets/img2.jpeg";
import couple from "../assets/img3.jpeg";
import portrait from "../assets/img4.jpeg";
import candid from "../assets/img5.jpeg";
import engagement from "../assets/img6.jpeg";
import reception from "../assets/img7.jpeg";
import bride from "../assets/img9.jpeg";
import traditional from "../assets/img8.jpeg";
import cinematic from "../assets/cinematic.jpeg";

export default function Gallery() {
  const items = [
    { title: "Wedding Photography", img: wedding, isFeatured: true, category: "Ceremony" },
    { title: "Signature Wedding", img: wedding2, isFeatured: false, category: "Luxury" },
    { title: "Couple Moments", img: couple, isFeatured: false, category: "Portraits" },
    { title: "Portrait Studio", img: portrait, isFeatured: true, category: "Editorial" },
    { title: "Candid Photography", img: candid, isFeatured: false, category: "Realism" },
    { title: "Engagement Shoot", img: engagement, isFeatured: false, category: "Events" },
    { title: "Reception Coverage", img: reception, isFeatured: false, category: "Grandeur" },
    { title: "Bridal Portraits", img: bride, isFeatured: true, category: "Fashion" },
    { title: "Traditional Wedding", img: traditional, isFeatured: false, category: "Culture" },
    { title: "Cinematic Shoots", img: cinematic, isFeatured: false, category: "Films" },
  ];

  return (
    <section className="gallery">
      {/* Editorial Header */}
      <div className="gallery-header">
        <span className="gallery-tag">Portfolio Collection</span>
        <h2 className="gallery-title">Timeless <span className="accent">Visual</span> Stories</h2>
        <p className="gallery-subtitle">
          Explore our signature photography collections crafted
          with timeless elegance and cinematic storytelling.
        </p>
        <a
          href="https://wa.me/919952397023?text=Hello%20MV%20Photography,%20I%20want%20to%20book%20a%20photoshoot"
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-cta"
        >
          Book Your Session
          <span className="cta-arrow">→</span>
        </a>
      </div>

      {/* Masonry Grid Section */}
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div 
            className={`gallery-item ${item.isFeatured ? "featured" : ""}`} 
            key={index}
          >
            <div className="gallery-image-box">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <div className="overlay-top">
                </div>
                <div className="overlay-bottom">
                  <h3 className="item-title">{item.title}</h3>
                  <div className="item-link">→</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}