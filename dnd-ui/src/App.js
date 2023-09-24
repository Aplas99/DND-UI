import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
// import video from './images/diceRoll.mp4';
import diceImg1 from './images/Dice1.png';
import diceImg2 from './images/Dice2.png';
import diceImg3 from './images/Dice3.png';
import diceImg4 from './images/Dice4.png';
import diceImg5 from './images/Dice5.png';
import diceImg6 from './images/Dice6.png';

function App() {
  const diceImages = [
    diceImg1,
    diceImg2,
    diceImg3,
    diceImg4,
    diceImg5,
    diceImg6
  ]

  const [image, setImage] = useState(diceImages[0]);
  const [image2, setImage2] = useState(diceImages[1]);

  const rollDice = () => {
    setImage(diceImages[Math.floor(Math.random() * 6)]);
    setImage2(diceImages[Math.floor(Math.random() * 6)]);
  }

  return (
    
    
    <div className="App">
      <center> 
        <h1>ROLL THE DICE </h1>
        <div className="container"> 
        <img className='square' alt="" src={image}></img>
        <div style={{width: '5px', display: 'inline-block'}}></div>
        <img className='square' alt="" src={image2}></img>
        </div> 
        <button type="button" class="btn btn-outline-primary" onClick={rollDice}>Roll</button>
      </center>
      
    </div>
    
    
  );
}

export default App;
