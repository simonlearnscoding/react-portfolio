import React from "react";
import Header from "./Components/Header/Header.jsx";
import About from "./Components/About/About.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
