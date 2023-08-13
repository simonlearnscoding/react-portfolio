import React, { useState } from "react";
import "./Navbar.css";
import {
  AiFillHome,
  AiOutlineUser,
  AiFillCode,
  AiOutlineContacts,
} from "react-icons/ai";
//DONE fix error Active Nav item is null
// <!-- order:0 completed:2023-05-22T16:54:21.580Z -->
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const navItems = [
    { href: "#", icon: AiFillHome },
    { href: "#About", icon: AiOutlineUser },
    { href: "#Experience", icon: AiFillCode },
    { href: "#Portfolio", icon: AiFillCode },
    { href: "#Contact", icon: AiOutlineContacts },
  ];

  const trackScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollTop = window.pageYOffset;

    sections.forEach((section) => {
      if (
        scrollTop >= section.offsetTop - 1 &&
        scrollTop < section.offsetTop + section.offsetHeight - 1
      ) {
        // get all Navbar Items
        const activeNavItem = document.querySelector(
          `.Navbar a[href="#${section.id}"]`
        );
        console.log(activeNavItem);
        // call the setActiveNav function for that item
        setActiveNav(activeNavItem.getAttribute("href"));
      } else if (scrollTop === 0) {
        setActiveNav("#");
      }
    });
  };

  window.addEventListener("scroll", trackScroll);

  return (
    <nav className="Navbar">
      {navItems.map((item) => (
        <NavbarElement
          key={item.href}
          href={item.href}
          icon={item.icon}
          onClick={() => setActiveNav(item.href)}
          isActive={activeNav === item.href}
        />
      ))}
    </nav>
  );
};

const NavbarElement = ({ href, icon: Icon, onClick, isActive }) => {
  return (
    <a href={href} onClick={onClick} className={isActive ? "active" : ""}>
      <Icon />
    </a>
  );
};

export default Navbar;
