import "./Hero.css";
import heroImage from "../../assets/hero.jpeg";

export default function Hero(){

  const whatsappNumber = "919876543210"; // replace with your number

  const message =
  "Hello MV Photography, I would like to book a luxury photography session. Please share details.";

  const whatsappLink =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return(
    <section className="hero">

      <img
        src={heroImage}
        alt="MV Photography Luxury Hero"
        className="hero-img"
      />

      <div className="hero-overlay">

        <h1>Timeless Luxury Photography</h1>

        <p>
          Capturing elegance, emotion, and beauty in every frame.
          Wedding • Pre-Wedding • Portrait • Cinematic Films
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          Reserve Your Date
        </a>

      </div>

    </section>
  );
}