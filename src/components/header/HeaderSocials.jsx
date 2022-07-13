import React from "react";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="https://github.com/carlen32">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100082530069752">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
