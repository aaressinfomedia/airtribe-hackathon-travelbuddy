import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero1 from './components/Hero1';
import Footer from './components/Footer';

// Import Claude AI client (fictional)
// Replace this with the actual import if Claude AI is real
import { getResponseFromClaude } from './api/claudeApi';





function App() {


  return (

    <div className="App">
    <Header/>
    <Hero1/>

    <Footer/>
</div>
  );
}

export default App;
