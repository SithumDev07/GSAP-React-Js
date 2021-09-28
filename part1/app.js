import React, {useRef, useEffect, useState} from 'react';
import './App.css';

import {gsap,Power3} from 'gsap'

function App() {
  let app = useRef(null);
  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)

  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    gsap.to(
      circleRed,
      {
        duration: .8,
        width: 200,
        height: 200,
        ease: Power3.easeOut
      }
    )
    setExpand(true);
  }
  
  const handleShrink = () => {
    gsap.to(
      circleRed,
      {
        duration: .8,
        width: 75,
        height: 75,
        ease: Power3.easeOut
      }
    )
      setExpand(false);
    }

  useEffect(() => {
    gsap.to(
      app,
      {
        duration: 0,
        css: {visibility: 'visible'}
      }
    );
    gsap.from(
      [circle, circleRed, circleBlue],
      {
        duration: .9,
        opacity: 0,
        x: 40,
        ease: Power3.easeOut,
        stagger: .2
      },
    )
  }, []);

  return (
    <div className="App" ref={el => {app = el}}>
      <header className="App-header">
       <div className="circle-container">
          <div className="circle" ref={el => {circle = el}}></div>
          <div className="circle red" ref={el => {circleRed = el}} onClick={expand !== true ? handleExpand : handleShrink}></div>
          <div className="circle blue" ref={el => {circleBlue = el}}></div>
       </div>
      </header>
    </div>
  );
}

export default App;
