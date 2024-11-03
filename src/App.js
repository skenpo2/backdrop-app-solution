import React from 'react';
import Nav from './component/Nav';
import Hero from './component/Hero';
import About from './component/About';
import Services from './component/Services';
import Tours from './component/Tours';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
      <Nav />;
      <Hero />;
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
};

export default App;
