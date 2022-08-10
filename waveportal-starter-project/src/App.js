import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there! 👋
        </div>

        <div className="bio">
        I am a software engineer and a web developer. I am currently working at <a href="https://www.waveportal.com">WavePortal</a> as a software engineer.
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
