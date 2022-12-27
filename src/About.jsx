import React from 'react'
import "./about.css"
import arrow from "./components/photos/arrow.png"
import cyrcleOne from "./components/photos/cyrcleOne.jpg"
import { Link } from 'react-router-dom';




function About() {
  return (
    <main className="about-main">

      <div className="text-cont">
        <aside className="side-icons">
        
          <a target="_blank" title="linkedin" href="https://www.linkedin.com/in/filip-ratkovic-067a96233/">
            <img src="https://img.icons8.com/color/48/null/linkedin-2--v1.png" alt="linkedin logo" />
          </a>

          <a target="_blank" title="github" href="https://github.com/filip-ratkovic">
            <img src="https://img.icons8.com/ios-glyphs/30/null/github.png" alt="github logo" />
          </a>
          <a target="_blank" title="instagram" href="https://www.instagram.com/filip_ratkovic/">
            <img src="https://img.icons8.com/fluency/48/null/instagram-new.png" alt="instagram logo" />
          </a>

          <Link to="/"><img title="back on home page" src="https://img.icons8.com/fluency/48/null/circled-left.png"/></Link>
        </aside>
        <div className="about-text">
          <p className="letter" ><span>A</span> <span>b</span> <span>o</span> <span>u</span> <span>t</span>
            <span className="space"></span> <span>m</span> <span>e</span></p>

          <p>Hello! I'm frontend developer from Novi Pazar, Serbia.
            My interest in web development started back in 2020 when i started course
            in <span className='text-important'>Centar NIT</span>.
            I have serious passion and ambitions about developing.
          </p>
          <p>
            Hardworket and well-organised person who love to learn and solve problems.
            Fan of sports, movies, drawing and traveling.
            A family person and father of one daughter and one son.
          </p>
          <p>
            I'm  eager to learn and interested in entire frontend sprectrum, also
            to work with ambitious and and positive people on big projects.
          </p>
          <p>
            Here are a few technologies I've been lerned:
          </p>
          <div className="about-skill-list">
            <ul>
              <li> <img src={arrow} alt="arrow" /> HTML5</li>
              <li> <img src={arrow} alt="arrow" /> CSS3</li>
              <li> <img src={arrow} alt="arrow" /> JavaScript  (ES6+)</li>
              <li> <img src={arrow} alt="arrow" /> TypeScript</li>
              <li> <img src={arrow} alt="arrow" /> React.js</li>
              <li> <img src={arrow} alt="arrow" /> React Native</li>
            </ul>
          </div>

        </div>
        <aside className="side-email">
          <a href="mailto:filip28r@gmail.com">
            <p>⸻  filip28r@gmail.com   ⸻</p>
          </a>
        </aside>


      </div>


      {/* <div>
<iframe src="https://fr-ecommerce.netlify.app/" frameborder="0" className="cont"></iframe>
      </div> */}

      <div className="certificates">
      <p className="letter" ><span>C</span> <span>e</span> <span>r</span> <span>t</span> <span>i</span>
              <span>f</span> <span>i</span> <span>c</span> <span>a</span> <span>t</span> <span>e</span>
              <span>s</span> </p>

        <div className="c-info">
          <div className="c-text">
            
            <h2>
              Frontend developer
            </h2>
            <p className="c-title" >RISC</p>
            <div className="c-one">
              <p>
              Start second cyrcle of "IT Camp - Serbia 2022" course that cover React.
              We learn:
              </p>
              <div className="c-frontend-list">
                <ul>
                  <li> <img src={arrow} alt="arrow" />More about javaScript framework React.js.</li>
                  <li> <img src={arrow} alt="arrow" />Work on larger projects in team,</li>
                  <li> <img src={arrow} alt="arrow" />Work on several projects alone wheare we </li>
                  <li> <img src={arrow} alt="arrow" /> Using version control system (GitHub).</li>
                </ul>
              </div>
            </div>
              <p id="c-date">Oct 2021 - May 2022</p>
            
           
          </div>
          <div className="c-photo">
            <img src={cyrcleOne} alt="certificate" />
          </div>
        </div>


        <div className="c-info">
          <div className="c-text">
            <h2>
              REACT
            </h2>
            <p className="c-title" >RISC</p>
            <div className="c-one">
              <p>
                Successfully completed training:  cycle of "IT Camp - Serbia 2022" course.
                We learn:
              </p>
              <div className="c-frontend-list">
                <ul>
                  <li> <img src={arrow} alt="arrow" />Modern JavaScript (ES6+), CSS3 and HTML5,</li>
                  <li> <img src={arrow} alt="arrow" /> Write cross-browser compatible code,</li>
                  <li> <img src={arrow} alt="arrow" />Apply best practices for software development,</li>
                  <li> <img src={arrow} alt="arrow" /> Using version control system (GitHub).</li>
                </ul>
              </div>
            </div>
            <p id="c-date">Oct 2021 - May 2022</p>

           
          </div>
          <div className="c-photo">
            <img src={cyrcleOne} alt="certificate" />
          </div>
        </div>
      </div>




    </main>
  )
}

export default About