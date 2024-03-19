import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar/Navbar';
import Intro from './component/Intro/Intro';
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
    </div>
  );
};

export default App;