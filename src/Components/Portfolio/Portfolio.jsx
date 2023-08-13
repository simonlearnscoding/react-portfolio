import React from "react";
import "./Portfolio.css";
import portfolio from "../../assets/portfolio1.jpg";

const projects = [
  // const project-1 = {
  // name : "",
  // projectDescription: "",
  // imageLink :  "",
  // imageAlt : ""
  // }
];
// TODO: add all of my projects
const Project = ({ projectName, projectDescription, imageLink, imageAlt }) => {
  return (
    <div className="Project">
      <div className="Project__image">
        <img src={portfolio} alt={imageAlt} />
      </div>
      <div className="Project__description">
        <h2 className="Project__title"> {projectName} </h2>
        <p> {projectDescription} </p>
        <div className="project__buttons">
          <button className="btn btn-primary"> View Project </button>
          <button className="btn btn-primary"> View Code </button>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projObjArray = [
    {
      projectName: "Project Name",
      projectDescription:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. ",
      imageLink: portfolio,
      imageAlt: "Image Alt",
    },
  ];

  return (
    <section id="Portfolio" className="Portfolio__section">
      <h1 className="Portfolio__heading"> My Work </h1>
      <h2 className="Portfolio__title"> have a look at my work </h2>
      <div className="portfolio__projects">
        {projObjArray.map((project) => (
          <Project {...project} key={project.projectName} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
