import React from "react";
import { BsBootstrap } from "react-icons/bs";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSass, SiRedux, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive2 className="experience__details-icon" />
              <div>
                {" "}
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCss3 className="experience__details-icon"/>
              <div>
                {" "}
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiSass className="experience__details-icon" />
              <div>
                {" "}
                <h4>SASS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                {" "}
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsBootstrap className="experience__details-icon" />
              <div>
                {" "}
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                {" "}
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
                {" "}
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          {/* The Back-end */}
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                {" "}
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                {" "}
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                {" "}
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
