import React from 'react';

export default function Aboutme() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content  pt-5">
          <h1>
            About
            <br />
            &#x2501; me
          </h1>
          <img src="https://i.ibb.co/mGS1JXq/hero-bg.jpg" alt="hero-bg" border="0" />
        </div>
        <div className="about-2 ">
          <div className="content-2 ">
            <p>A lil bit about me</p>
          </div>
          <div className="content-2">
            <p>I'm a Frontend Developer, currently based in Indonesia. I'm passionate about improving my experiences in Programming, Design and constantly looking to learn new things everyday.</p>
          </div>
        </div>
        <div className="about-2">
          <div className="content-2">
            <p>Skills</p>
          </div>
          <div className="content-2">
            <ul>
              <li>ReactJs</li>
              <li>Javascript</li>
              <li>Git</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>SASS</li>
              <li>HTML/CSS</li>
              {/* <li>Responsive web design</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
