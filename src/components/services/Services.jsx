import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
   <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
<article className="service">
  <div className="service__head">
    <h3>UI/UX Design</h3>
  </div>
  <ul className='service__list'>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p> HTML/CSS, JavaScript, GitHub, debugging, JS/Front-End frameworks</p>
  </li>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p>Basics of typography, color theory, Sketch, and Figma. </p>
  </li>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p>Basics of graphic design and branding </p>
  </li>
  </ul>
</article>
{/* End of UI/UX */}
<article className="service">
  <div className="service__head">
    <h3>Web Development</h3>
  </div>
  <ul className='service__list'>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p>Design, create and manage powerful websites </p>
  </li>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p>analyze user needs to implement website content, graphics and performance </p>
  </li>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p>Capable of learning new trends that wants to be incorporated in website</p>
  </li>
  </ul>
</article>
{/* End OF WEB DEVELOPMENT */}
<article className="service">
  <div className="service__head">
    <h3>Content Creation</h3>
  </div>
  <ul className='service__list'>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p>Create value proposition and pinpoint users objections</p>
  </li>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p>Identify top tasks and organize content in unique compelling ways.</p>
  </li>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p>Build content structure and edit to Client's approval. </p>
  </li>
  <li>
    <AiOutlineCheck className='service__list-icon' />
    <p> Testing, monitor, and refine content. </p>
  </li>
  </ul>
</article>
{/* End of Content*/}
    </div>
   </section>
  )
}

export default Services

