import { useState } from "react";
import "./NavBar.css";
import Logo from "../../assets/Logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <img src={Logo} alt="Ani Logo" />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Menu */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Me
          </a>
        </li>
        <li>
          <a href="#study" onClick={() => setMenuOpen(false)}>
            Study
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
      </ul>

      <div className="nav-contact" >
        <a href="#contact">Contact With Me</a>
      </div>
    </div>
  );
};

export default NavBar;
