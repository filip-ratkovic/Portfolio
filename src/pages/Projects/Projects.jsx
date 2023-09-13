import { React, useState } from "react";
import movie from "../../slike/movie.png"
import movieM from "../../slike/movieM.JPG"
import oglasi from "../../slike/oglasi.png"
import oglasiM from "../../slike/oglasiM.JPG"
import tsShop from "../../slike/tsShop.jpg"
import tsShopM from "../../slike/tsShopM.JPG"
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

      <div className="projectsContainer" style={{alignItems:"center"}}>
        <div className="projectText">
          <h1>Ad app</h1>
          <h3 style={{ color: "#93a0a3", marginBottom: "20px" }}>
            React, Redux, Firebase, Formik, Yup, Mui
          </h3>
          <p className="project-description">
            Developed an advertising website using React and Redux for state
            management, Firebase for backend services, and integrated Formik and
            Yup for form handling. Utilized Material-UI (Mui) for designing a
            modern and intuitive user interface.
          </p>
          <button>
            <a
              target="_blank"
              href="https://fr-oglasi.netlify.app/"
              className="explore"
            >
              Go to Website ↗
            </a>
          </button>
        </div>
        <div className="projectPhoto">
        <div             
              className="smallImg"
            >
              <img src={oglasi} alt="Ads big screen"  style={{width:"100%", objectFit:"contain", borderRadius:"8px",
            border:"3px solid black"}}/>
            </div>
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
              style={{height:"100%"}}
            >
              <img src={oglasiM} alt="Ads mobile screen" style={{ maxHeight:"95%", width:"100%", borderRadius:" 0 0 15px 15px"}} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />

      <div className="projectsContainer" style={{alignItems:"center"}}>
      <div className="projectText">
          <h1>Movie DB</h1>
          <h3 style={{ color: "#93a0a3", marginBottom: "20px" }}>
            React, Mui, Axios, Swiper.js
          </h3>
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
              Go to Website ↗
            </a>
          </button>
        </div>
        <div className="projectPhoto">
        <div             
              className="smallImg"
            >
              <img src={movie} alt="Movie big screen"  style={{width:"100%", objectFit:"contain", borderRadius:"8px",
            border:"3px solid black"}}/>
            </div>
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
              style={{height:"100%"}}
            >
              <img src={movieM} alt="Movie mobile screen" style={{ maxHeight:"95%", width:"100%", borderRadius:" 0 0 15px 15px"}} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />

      <div className="projectsContainer" style={{alignItems:"center"}}>
      <div className="projectText">
          <h1>Ts Store</h1>
          <h3 style={{ color: "#93a0a3", marginBottom: "20px" }}>
            React, TypeScript, Bootstrap
          </h3>
          <p className="project-description">
          Created a responsive store website featuring TypeScript and React, with Bootstrap for styling.
          </p>
          <button>
            <a
              target="_blank"
              href="https://fr-tsstore.netlify.app"
              className="explore"
            >
              Go to Website ↗
            </a>
          </button>
        </div>
        <div className="projectPhoto">
        <div             
              className="smallImg"
            >
              <img src={tsShop} alt="Ts shop big screen"  style={{width:"100%", objectFit:"contain", borderRadius:"8px",
            border:"3px solid black"}}/>
            </div>
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
              style={{height:"100%"}}
            >
              <img src={tsShopM} alt="Ts shop mobile screen" style={{ maxHeight:"95%", width:"100%", borderRadius:" 0 0 15px 15px"}} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;