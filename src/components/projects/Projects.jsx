/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Data from './Data';

const Projects = () => {
  // console.log(Data)
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container container__projects">
      {
       Data ? Data.map((p) => {
          return(
            <article key={p.id} className="projects__item">
            <div className="project__item-image">
              <img src={p.image} alt={p.title} />
            </div>
            <h3>{p.title}</h3>
            <div className="project__cta">
              <a href={p.github} className="btn">
                Github
              </a>
              <a
                href={p.demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          )
        }) :''
      }
      </div>
    </section>
  );
};

export default Projects;
