// src/views/home.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Features1 from '../components/features1';
import CTA from '../components/cta';
import Features2 from '../components/features2';
import Steps from '../components/steps';
import Testimonial from '../components/testimonial';
import Contact from '../components/contact';
import Footer from '../components/footer';
import './home.css';

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar />
      <Hero />
      <Link to="/form">
        <button className="thq-button-filled hero-button1">Get Started</button>
      </Link>
      <Features1 />
      <CTA />
      <Features2 />
      <Steps />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;