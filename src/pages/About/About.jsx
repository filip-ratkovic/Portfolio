import React from "react";
import "./about.css";
import arrow from "../../slike/arrow.png";
import Certificates from "../../components/Certificates";
import AboutAside from "../../components/AboutAside";

function About() {

  const downloadFile = () => {
    fetch('Filip Ratkovic CV.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Filip Ratkovic CV.pdf';
            alink.click();
        })
    })
}
  return (
    <main className="about-main" id="about">
      <div className="text-cont">
        <AboutAside/>
        <div className="about-text">
          <p className="letter">
            <span>A</span> <span>b</span> <span>o</span> <span>u</span>{" "}
            <span>t</span>
            <span className="space"></span> <span>m</span> <span>e</span>
          </p>

          <p>
            Hello! I'm frontend developer from Novi Pazar, Serbia. My interest
            in web development started back in 2021 when i started course in{" "}
            <span className="text-important">Centar NIT</span>. I have serious
            passion and ambitions about developing.
          </p>
          <p>
            Hardworker and well-organised person who love to learn and solve
            problems. Fan of sports, movies, drawing and traveling. 
          </p>
          <p>
            I'm eager to learn and interested in entire frontend sprectrum, also
            to work with ambitious and positive people on big projects.
          </p>


          <p>Here are a few technologies I've been lerned:</p>
          <div className="about-skill-list">
            <ul>
              <li>
                <img src={arrow} alt="arrow" /> HTML5
              </li>
              <li>
                <img src={arrow} alt="arrow" /> CSS3
              </li>
              <li>
                <img src={arrow} alt="arrow" /> JavaScript (ES6+)
              </li>
              <li>
                <img src={arrow} alt="arrow" /> TypeScript
              </li>
              <li>
                <img src={arrow} alt="arrow" /> React.js
              </li>
              <li>
                <img src={arrow} alt="arrow" /> Redux
              </li>
            </ul>
          </div>
          <p style={{cursor:'pointer'}}  onClick={downloadFile}><span className='text-important'>Download CV</span></p>

        </div>
        <aside className="side-email">
          <a href="mailto:filip28r@gmail.com">
            <p>⸻ filip28r@gmail.com ⸻</p>
          </a>
        </aside>
      </div>
      {/* <Certificates/> */}
    </main>
  );
}

export default About;
