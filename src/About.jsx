import React from 'react'
import "./about.css"
import linkedin from "./components/photos/linkedin.png";

function About() {
  return (
    <main className="about-main">
      <div className="text-cont">
        <div className="about-text">
          <p className="letter" ><span>A</span> <span>b</span> <span>o</span> <span>u</span> <span>t</span>
            <span className="space"></span> <span>m</span> <span>e</span></p>

          <p>I'm frontend developer from Novi Pazar, Serbia.
            I have serious passion and ambitions about developing.
          </p>
          <p>
            Hardworket and well-organised person who love to learn and solve problems.
            Fan of sports, movies, drawing and traveling.
            A family person and father of one daughter and son.
          </p>
          <p>
            I'm  eager to learn and interested in entire frontend sprectrum, also
            to work with ambitious and and positive people on big projects.
          </p>
        </div>
        <div className="about-info">
         <div className="about-info-wrapper">
           <div className="about-info-contact">
            c
          </div>
          <div className="about-info-social">
            <h1 className="letter"> 
            <span>S</span>
            <span>o</span> 
            <span>c</span> 
            <span>i</span>
            <span>a</span>
            <span>l</span></h1>
            <div className="social-cont">
              <img src={linkedin} alt="" />
              <a href="https://www.linkedin.com/in/filip-ratkovic-067a96233/">www.linkedin.com/in/filip-ratkovic-067a96233/</a>
            </div>
          </div>
         </div>
          <div className="about-info-skills">
            skill
          </div>
        </div>
      </div>
      
    </main>
  )
}

export default About