/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="!#" className='footer__logo'><svg width="91" height="74" viewBox="0 0 91 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.5 9C15.7321 9 7 16.4556 7 25.654C7 33.0794 10.4125 50.7024 44.0032 68.5171C44.6049 68.833 45.2957 69 46 69C46.7043 69 47.3951 68.833 47.9968 68.5171C81.5875 50.7024 85 33.0794 85 25.654C85 16.4556 76.2679 9 65.5 9C54.7321 9 46 19.0933 46 19.0933C46 19.0933 37.2679 9 26.5 9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M69.0131 22.6232L67.6598 21.8627C74.426 15.6356 66.3066 11.1198 62.4823 15.7782C58.8932 20.1513 63.7766 25.5703 66.7185 32.6054C71.3666 43.7286 70.6606 49.7179 64.6593 55.5171C49.5382 70.0628 21.2378 64.5012 31.0047 49.4326C34.3584 44.2514 40.1832 40.5437 50.1266 41.4469C51.0679 42.3976 50.0678 42.7779 49.3617 43.0631C41.301 46.2955 36.6531 59.2724 43.6545 58.9872C47.0082 58.8921 52.0094 56.1826 54.5981 51.5718C57.5988 46.2003 53.8921 39.4504 51.2444 33.0808C45.0666 18.0599 59.0698 5.08301 75.0734 11.8328C81.1336 14.3997 77.1327 23.3837 69.0132 22.6232H69.0131Z" fill="#222222"/>
<path d="M21.9869 22.6232L23.3402 21.8627C16.574 15.6356 24.6934 11.1198 28.5177 15.7782C32.1068 20.1513 27.2234 25.5703 24.2815 32.6054C19.6334 43.7286 20.3394 49.7179 26.3407 55.5171C41.4618 70.0628 69.7622 64.5012 59.9953 49.4326C56.6416 44.2514 50.8168 40.5437 40.8734 41.4469C39.9321 42.3976 40.9322 42.7779 41.6383 43.0631C49.699 46.2955 54.3469 59.2724 47.3455 58.9872C43.9918 58.8921 38.9906 56.1826 36.4019 51.5718C33.4012 46.2003 37.1079 39.4504 39.7556 33.0808C45.9334 18.0599 31.9302 5.08301 15.9266 11.8328C9.86643 14.3997 13.8673 23.3837 21.9868 22.6232H21.9869Z" fill="#222222"/>
</svg>
</a>
      <ul className="permalinks">
        <li><a href="!#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    <div className="footer__socials">
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

    <div className="footer__copyright">
      <small>&copy; David Carlen. All right reserved.</small>
    </div>
    </footer>
  )
}

export default Footer