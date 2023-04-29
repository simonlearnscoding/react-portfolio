import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { HiAcademicCap } from "react-icons/hi";
const About = () => {
  const aboutItems = [
    { icon: HiAcademicCap, title: "Experience" },
    { icon: HiAcademicCap, title: "Experience" },
    { icon: HiAcademicCap, title: "Experience" },
  ];

  return (
    <section id="About">
      <h5>Hi, I'm Simone Muscas</h5>
      <h2>Who am I?</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {aboutItems.map((item) => (
              <AboutContent icon={item.icon} title={item.title} />
            ))}
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium harum incidunt veritatis amet quod fugiat cum. Aut,
            ducimus. Iste ipsum et odio fugiat libero minima? Natus dolores
            dolore ipsam blanditiis?
          </p>
          <a href="#Contact" className="btn btn-primary">
            {" "}
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutContent = ({ icon, title }) => {
  return (
    <article className="about__card">
      <HiAcademicCap className="about__icon" />
      <h5>Experience</h5>
    </article>
  );
};

export default About;
