import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import './app.css';
import { BestSeller } from './components/BestSeller';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Menu />
      <BestSeller />
    </div>
  );
};

export default App;
