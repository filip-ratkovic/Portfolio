import React from 'react'
import "./about.css"

function About() {
  return (
    <main className="about-main">
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
      <div className="about-skills">
        <p id="skill1">HTML</p>
        <p id="skill2">CSS</p>
        <p id="skill3">JavaScript</p>
        <p id="skill4">TypeScript</p>
        <p id="skill5">ReactJS</p>
        <p id="skill6">React Native</p>
        <p id="skill7">ES5/ES6</p>
        <p id="skill8">JSON</p>
        <p id="skill9">Github</p>

      </div>
    </main>
  )
}

export default About