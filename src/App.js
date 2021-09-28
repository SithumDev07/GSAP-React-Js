import React, {useRef, useEffect, useState} from 'react';
import './App.css';

import "./App.scss";
import "./reset.css"

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
        <div className='arrows right'>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>

        <div className="inner">
          <div className="t-image">
            <ul>
              <li>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li>
                <img src={testimonials[2].image} alt={testimonials[2].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title">{testimonials[0].title}</h4>
                </div>
              </li>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name">{testimonials[2].name}</h3>
                  <h4 className="title">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='arrows left'>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
