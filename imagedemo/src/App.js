import './App.css';
import React from 'react';
import img1 from './images/UB.jpg'
import Hello from './hello';

function App() {
  return (
    <>
    <Hello />
    <img src={img1} alt=""/>
    </>
    
  );
}

export default App;
