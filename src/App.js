import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Wwd from './Components/Wwd/Wwd';
import Course from './Components/Course/Course';
import Available from './Components/Available/Available';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

const App = () => (
  <div >
      <Navbar/>
      <Hero/>
      <Wwd/>
      <Course/>
      <Available/>
      <Testimonials/>
      <Footer/>
  </div>
);

export default App;
