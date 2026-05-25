import "./About.css";
import React from "react";
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
            I'm a <strong className="college">Full Stack Developer </strong>
            specializing in MERN Stack, scalable backend systems, and responsive
            frontend applications.
          </p>

          <p>
            Experienced in
            <strong className="college">
              {" "}
              Automation Testing, API Testing, and QA workflows{" "}
            </strong>
            using Selenium, PyTest, Jira, Jenkins, and Postman.
          </p>

          <p>
            Strong in
            <strong className="college"> Java, DSA </strong>, focused on writing
            optimized and maintainable code.
          </p>

          <p>
            Passionate about modern AI technologies including AI Agents, LLM
            Applications, Machine Learning, and intelligent automation systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
