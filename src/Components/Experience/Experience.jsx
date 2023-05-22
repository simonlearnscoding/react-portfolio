import React from "react";
import "./Experience.css";
import { FaBeer } from "react-icons/fa";

import {
  AiFillHome,
  AiOutlineUser,
  AiFillCode,
  AiOutlineContacts,
} from "react-icons/ai";

const Experience = () => {
  const CodingSkills = [
    { name: "HTML", icon: <AiFillHome />, level: "Experienced" },
    { name: "CSS", icon: <FaBeer />, level: "Experienced" },
    { name: "JavaScript", icon: <FaBeer />, level: "Experienced" },
    { name: "React", icon: <FaBeer />, level: "Experienced" },
  ];

  const UXSkills = [
    { name: "HTML", icon: <AiFillHome />, level: "Experienced" },
    { name: "CSS", icon: <FaBeer />, level: "Experienced" },
    { name: "JavaScript", icon: <FaBeer />, level: "Experienced" },
    { name: "React", icon: <FaBeer />, level: "Experienced" },
  ];

  return (
    <section id="Experience" className="Experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__webdevelopment">
          <h3>Web Development</h3>
          <div className="experience__content">
            {CodingSkills.map((skill) => {
              return ExperienceField(skill.name, skill.icon, skill.level);
            })}
          </div>
        </div>
        <div className="experience__UXUi">
          <h3>UX / UI</h3>
          <div className="experience__content">
            {CodingSkills.map((skill) => {
              return ExperienceField(skill.name, skill.icon, skill.level);
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// import { Container } from './styles';

function ExperienceField(name, icon, level) {
  return (
    <article className="experience__details">
      <div className="experience__icon">{icon}</div>
      <div>
        <h4>{name}</h4>
        <smalll className="text-light">{level}</smalll>
      </div>
    </article>
  );
}

export default Experience;
