import React, {useRef, useEffect, useState} from 'react';
import './App.css';

import "./App.scss";

import {gsap,Power3} from 'gsap'

const testimonials = [
  {
    name: "Sithum Basnayake",
    title: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2VvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "Keep Hustle!"
  },
  {
    name: "Apoorvi Pahanya",
    title: "Self Thought Artist",
    image: "https://images.unsplash.com/photo-1611244419377-b0a760c19719?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydGlzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "Dreams really keep awake people."
  },
  {
    name: "Senorita Bae",
    title: "Mentor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2VvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "The outstanding momements in out lives are just miracles."
  },
]

function App() {

  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const IMAGE_WIDTH = 340;

  const [image, setImage] = useState({
    isActive: true,
    isActive2: true,
    isActive3: true
  })

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        
      </div>
    </div>
  );
}

export default App;
