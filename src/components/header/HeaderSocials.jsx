/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/david-carlen-1b8983245/" target='_blank'>
        <BsLinkedin />
      </a>
      <a href="https://github.com/carlen32" target='_blank'>
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100082530069752" target='_blank'>
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
