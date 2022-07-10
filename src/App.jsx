import React from 'react';
import './assets/SASS/main.css';
import  Header  from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Firefly from './components/Firefly';

const App = () => {
  return (
   <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Projects />
    <Testimonials />
    <Contact /> 
    <Footer />
    <Firefly />
   </>
  );
}

export default App;
