import React from "react";
import me from '../../assets/img/me.png';
import {FiAward, FiUsers, FiFolder} from 'react-icons/fi';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt='about-me'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward  className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
            <article className="about__card">
              <FiUsers  className="about__icon"/>
              <h5>Clients</h5>
              <small>2</small>
            </article>
            <article className="about__card">
              <FiFolder className="about__icon"/>
              <h5>Projects</h5>
              <small>4</small>
            </article>
          </div>

          <p>
          I am a Junior web developer, designer, programmer with an energetic drive to always improve and expand my skill-set. I am a professional optimist who exceeds expectations and gets things done; all while staying approachable, motivated, and always willing to lend a helping hand. 
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
