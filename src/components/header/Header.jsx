import React from "react";
import CTA from "./CTA";
import Photo from "../../assets/img/babies.png"
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello My Name</h5>
        <h1>Is David Carlen </h1>
        <h5 className="text-light">
          FullStack Developer
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me" >
         <img src={Photo} alt="my children" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
