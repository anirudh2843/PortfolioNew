import "./Hero.css";
import HeroImg from "../../assets/hero2.png";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero-main">
        <img className="hero-img" src={HeroImg} alt="Anirudh" />
      </div>

      <div className="hero-sub">
        <p className="hero-greeting">
          <span>Hii,</span> I'm
        </p>
        <h1>
          <span>Domakonda Anirudh</span>
        </h1>
        <p className="hero-passion">
          <Typewriter
            words={[
              "MERN Full Stack Developer",
              "AI & ML Enthusiast",
              "Java Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1400}
          />
        </p>

        <div className="hero-media">
          <div className="hero-resume">
            <a
              className="resume-link"
              href="https://drive.google.com/file/d/1-GFF9f-UXf-iRCiTg-0xZU0DYmr74bTl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download="Anirudh_Resume.pdf"
            >
              <button className="resume-btn">Resume</button>
            </a>
          </div>

          <div className="social">
            <a
              href="https://www.linkedin.com/in/domakonda-anirudh-371ab3284/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/anirudh2843"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
