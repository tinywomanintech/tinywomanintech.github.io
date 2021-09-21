import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className=" animate__animated animate__slideInLeft">
            Tiara's <br />
            Portfolio <br />
            Website
          </h1>
          <img src="https://i.ibb.co/mGS1JXq/hero-bg.jpg" alt="hero-bg" border="0" />
        </div>
        <span>
          <AiOutlineLine />
        </span>
      </div>
    </section>
  );
}
