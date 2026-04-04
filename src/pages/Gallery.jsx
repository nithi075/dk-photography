import "./Gallery.css";

// உங்க actual images import
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
    {
      title: "Wedding Photography",
      img: wedding,
    },
    {
      title: "Signature Wedding",
      img: wedding2,
    },
    {
      title: "Couple Moments", 
      img: couple,
    },
    {
      title: "Portrait Studio",
      img: portrait,
    },
    {
      title: "Candid Photography",
      img: candid,
    },
    {
      title: "Engagement Shoot",
      img: engagement,
    },
    {
      title: "Reception Coverage",
      img: reception,
    },
    {
      title: "Bridal Portraits",
      img: bride,
    },
    {
      title: "Traditional Wedding",
      img: traditional,
    },
    {
      title: "Cinematic Shoots",
      img: cinematic,
    }
  ];

  return (
    <section className="gallery">
      <div className="gallery-intro">
        <span>PORTFOLIO COLLECTION</span>
        <h2>Start Your Photography Journey</h2>
        <p>
          Explore our signature photography collections crafted
          with timeless elegance and cinematic storytelling.
        </p>
        <a
          href="https://wa.me/918667041407?text=Hello%20MV%20Photography,%20I%20want%20to%20book%20a%20photoshoot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-primary">Book Session</button>
        </a>
      </div>

      <div className="gallery-grid">
        {items.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <div className="image-shadow"></div>
            <div className="center-text">
              <h3>{item.title}</h3>
              <span className="category-tag">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}