import React, {useRef, useEffect} from 'react';
import './App.css';

import {gsap,Power3} from 'gsap'

function App() {
  let app = useRef(null);
  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)

  useEffect(() => {
    gsap.to(
      app,
      {
        duration: 0,
        css: {visibility: 'visible'}
      }
    );
    gsap.from(
      circle,
      {
        duration: .9,
        opacity: 0,
        x: 40,
        ease: Power3.easeOut,
      }
      );
      gsap.from(
        circleRed,
        {
          duration: .9,
          opacity: 0,
          x: 40,
          ease: Power3.easeOut,
          delay: .2
      }
    );
    gsap.from(
      circleBlue,
      {
        duration: .9,
        opacity: 0,
        x: 40,
        ease: Power3.easeOut,
        delay: .4
      }
    );
  }, []);

  return (
    <div className="App" ref={el => {app = el}}>
      <header className="App-header">
       <div className="circle-container">
          <div className="circle" ref={el => {circle = el}}></div>
          <div className="circle red" ref={el => {circleRed = el}}></div>
          <div className="circle blue" ref={el => {circleBlue = el}}></div>
       </div>
      </header>
    </div>
  );
}

export default App;
