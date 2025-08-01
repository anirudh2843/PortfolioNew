import "./About.css";
import hero from "../../assets/hero3.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={hero} alt="" />
        </div>
        <div className="about-right">
          <p>
            Hi! I'm Anirudh, a final-year B.Tech CSE student at CMR
            College(CMRCET), passionate about solving real-world problems
            through technology.
          </p>

          <p>
            I'm a <strong className="passion">MERN Stack Developer</strong>{" "}
            skilled in MongoDB, Express.js, React, and Node.js , focused on
            building efficient and scalable web applications.
          </p>

          <p>
            I have a strong foundation in Java and Data Structures & Algorithms
            (DSA), which helps me write clean and optimized code.
          </p>

          <p>
            As an <strong className="skills">AI/ML enthusiast</strong>, I work
            with tools like{" "}
            <strong>Python, scikit-learn, TensorFlow, and OpenCV</strong>, and
            enjoy exploring intelligent systems and real-world ML applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
