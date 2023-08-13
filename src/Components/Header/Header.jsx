import React from "react";
import "./Header.css";
import CTA from "../CTA/CTA.jsx";
// import ME from "~/Downloads/me-jungle.jpg";
import HeaderSocials from "../Header/HeaderSocials.jsx";
//TODO: remove the picture for now
const Header = () => {
  return (
    <header id="#Header">
      <div className="header__container container">
        <h5>Hello I'm</h5>
        <h1>Simone Muscas</h1>
        <h5 className="text-light">Fullstack Developaer</h5>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

// <div className="me">
//   <img src={ME} alt="me" className="me__img" />
// </div>
