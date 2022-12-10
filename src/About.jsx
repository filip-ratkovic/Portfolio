import React from 'react'
import "./about.css"
import photo from "./components/photos/photo.png";

function About() {
  return (
    <main className="about-main">
     <div className="text-cont">
     <div className="about-text">
        <h1>About me</h1>
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
      <div className="about-photo">
        <img src={photo} alt="" />
      </div>
     </div>

      <div className="skills-cont">
        <h1>Skills</h1>
      </div>
      {/* <div className="about-skills">
        <p className="letter one" ><span>H</span> <span>T</span> <span>M</span> <span>L</span></p>
        <p className="letter six" ><span>C</span> <span>S</span> <span>S</span></p>
        <p className="letter three" ><span>J</span> <span>A</span> <span>V</span><span>A</span> <span>S</span> <span>C</span>
        <span>R</span> <span>I</span> <span>P</span> <span>T</span>
        </p>
        <p className="letter four" ><span>T</span> <span>Y</span> <span>P</span><span>E</span> <span>S</span> <span>C</span>
        <span>R</span> <span>I</span> <span>P</span> <span>T</span>
        </p>
        <p className="letter five" ><span>R</span> <span>E</span> <span>A</span><span>C</span> <span>T</span> <span>.</span>
        <span>J</span> <span>S</span>
        </p>
        <p className="letter two" ><span>R</span> <span>E</span> <span>A</span><span>C</span> <span>T</span> <span> </span>
        <span>N</span> <span>A</span> <span>T</span> <span>I</span> <span>V</span> <span>E</span>
        </p>
        <p className="letter seven" ><span>E</span> <span>S</span> <span>5</span> <span>/</span>
        <span>E</span> <span>S</span> <span>6</span>
        </p>
        <p className="letter eight" ><span>J</span> <span>S</span> <span>O</span> <span>N</span></p>
        <p className="letter nine" ><span>G</span> <span>I</span> <span>T</span></p>
        <p className="letter then" ><span>G</span> <span>I</span> <span>T</span>
        <span>H</span> <span>U</span> <span>B</span>
        </p>

      </div> */}
    </main>
  )
}

export default About