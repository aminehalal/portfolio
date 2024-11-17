import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import React from 'react';
import Formation from './Formation';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {


  return (
    <React.Fragment>
      <Header/>
      <Hero/>
      <About/>
      <Formation/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
