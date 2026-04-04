import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar(){

  const [menuOpen,setMenuOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);

  return(

    <nav className={`nav ${scrolled ? "nav-scroll" : ""}`}>

      <h2 className="logo">
        MV Photography
      </h2>

      {/* desktop links */}
      <div className="links">

        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#work">Portfolio</a>
        <a href="#contact">Contact</a>

      </div>

      {/* mobile icon */}
      <div
        className="menu-icon"
        onClick={()=>setMenuOpen(true)}
      >
        ☰
      </div>

      {/* mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <span
          className="close"
          onClick={()=>setMenuOpen(false)}
        >
          ✕
        </span>

        <a href="#hero" onClick={()=>setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
        <a href="#work" onClick={()=>setMenuOpen(false)}>Portfolio</a>
        <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>

      </div>

    </nav>

  );

}