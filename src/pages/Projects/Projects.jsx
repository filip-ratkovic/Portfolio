import { React, useState } from "react";
import cattle from "../../slike/cattle.png";
import avengers from "../../slike/avengers.png";
import movie from "../../slike/movie.png";
import cattleM from "../../slike/cattleM.jpg";
import movieM from "../../slike/movieM.jpg";
import shop from "../../slike/shop.png";
import shopM from "../../slike/shopM.jpg";
import "./projects.css";

function Projects() {
  const [leftActive, setLeftActive] = useState(true);
  const [rightActive, setRightActive] = useState(false);
  const time = new Date();
  const clock = `${time.getHours()}:${time.getMinutes()}`;

  const clickHandlerLeft = (event) => {
    if (leftActive) {
    } else {
      setLeftActive((current) => !current);
      setRightActive(false);
    }
  };

  const clickHandlerRight = (event) => {
    if (rightActive) {
    } else {
      setRightActive((current) => !current);
      setLeftActive(false);
    }
  };
  return (
    <main className="main-cont" id="projects">
      <div className="letter-cover">
        <p className="letter">
          <span>P</span> <span>r</span> <span>o</span> <span>j</span>
          <span>e</span> <span>c</span> <span>t</span> <span>s</span>
        </p>
      </div>
      <div className="projectsContainer">
        <div className="projectText">
          <h2>Project</h2>
          <h1>Commerce</h1>
          <h5>Furniture site.</h5>
          <p>
            I use api for that project, where i create web shop for selling
            furniture.
          </p>
          <button>
            <a
              className="explore"
              target="_blank"
              href="https://fr-ecommerce.netlify.app/"
            >
              Explore ↗{" "}
            </a>{" "}
          </button>
        </div>
        <div className="projectPhoto">
          <div
            className="projects"
            style={{ backgroundImage: `url(${shop})` }}
          ></div>
          <div className="smallImageCont">
            <div className="smallImgUp">
              <div className="clock">
                <p>{clock}</p>
              </div>
              <div className="blackSpace"></div>
              <div className="signal">
                <img src="https://img.icons8.com/ios-filled/50/null/high-connection.png" />
                <p>4G</p>
                <img src="https://img.icons8.com/ios-glyphs/30/null/full-battery.png" />
              </div>
            </div>
            <div
              className="smallImg"
              style={{ backgroundImage: `url(${shopM})` }}
            ></div>
          </div>
        </div>
      </div>

      <br />
      <hr />

      <div className="projectsContainer">
        <div className="projectText">
          <h1>Movie DB</h1>
          <h3 style={{color:"#93a0a3", marginBottom:"20px"}}>React, Mui, Axios, Swiper.js</h3>
          <p className="project-description">
            Developed a dynamic movie database website by integrating TMDB APIs
            for data retrieval. Implemented Swiper.js to enhance the user
            interface and create interactive content presentation.
          </p>
          <button>
            <a
              target="_blank"
              href="https://fr-moviedb.netlify.app/"
              className="explore"
            >
              Go to Website ↗{" "}
            </a>{" "}
          </button>
        </div>
        <div className="projectPhoto">
          <iframe
            src="https://fr-moviedb.netlify.app/"
            className="projects"
            title="Movie DB"
          ></iframe>
          <div className="smallImageCont">
            <div className="smallImgUp">
              <div className="clock">
                <p>{clock}</p>
              </div>
              <div className="blackSpace"></div>
              <div className="signal">
                <img src="https://img.icons8.com/ios-filled/50/null/high-connection.png" />
                <p>4G</p>
                <img src="https://img.icons8.com/ios-glyphs/30/null/full-battery.png" />
              </div>
            </div>
            <iframe
              src="https://fr-moviedb.netlify.app/"
              className="smallImg"
              title="Movie DB mobile"

            ></iframe>
          </div>
        </div>
      </div>

      <br />
      <hr />

      <div>
        <iframe
          src="https://fr-moviedb.netlify.app/"
          style={{ width: "400px", height: "400px" }}
        ></iframe>
      </div>
    </main>
  );
}

export default Projects;
