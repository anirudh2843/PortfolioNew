import "./Education.css";
import btech from "../../assets/btech.png";
import inter from "../../assets/inter.png";

const Education = () => {
  return (
    <section className="education" id="study">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <p className="quote">
        Learning is not just about knowledge—it's about transforming ideas into
        possibilities.
      </p>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={btech} alt="College" />
          </div>
          <div className="content">
            <h3>Bachelor of Technology in CSE</h3>
            <p>CMR College of Engineering & Technology (CMRCET)</p>
            <h4>2022-2026 | Pursuing</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={inter} alt="School" />
          </div>
          <div className="content">
            <h3>Intermediate | MPC</h3>
            <p>Sri Chaitanya Junior College</p>
            <h4>2020-2022 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
