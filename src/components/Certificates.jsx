import React from 'react'
import cyrcleOne from "../slike/cyrcleOne.jpg"
import arrow from "../slike/arrow.png";
import {downloadFile} from "@mui/icons-material"
import { Icon } from '@mui/material';

function Certificates() {
    const downloadFile = () => {
        fetch('cyrcleOne.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'First cyrcle.pdf';
                alink.click();
            })
        })
    }

  return (
    <div className="certificates">
        <p className="letter">
          <span>C</span> <span>e</span> <span>r</span> <span>t</span>{" "}
          <span>i</span>
          <span>f</span> <span>i</span> <span>c</span> <span>a</span>{" "}
          <span>t</span> <span>e</span>
          <span>s</span>
        </p>

        <div className="c-card-cont">
          <div className="c-info-cont">
            <h2>FRONTEND DEVELOPER</h2>
            <p className="c-title">RISC</p>
            <div className="c-one">
              <p>
                Successfully completed training: first cycle of "IT Camp -
                Serbia 2022" course. We learn:
              </p>
              <div className="c-frontend-list">
                <ul>
                  <li>
                    <img src={arrow} alt="arrow" />
                    Modern JavaScript (ES6+), CSS3 and HTML5,
                  </li>
                  <li>
                    <img src={arrow} alt="arrow" /> Write cross-browser
                    compatible code,
                  </li>
                  <li>
                    <img src={arrow} alt="arrow" />
                    Apply best practices for software development,
                  </li>
                  <li>
                    <img src={arrow} alt="arrow" /> Using version control system
                    (GitHub).
                  </li>
                </ul>
              </div>
            </div>
            <p className="c-title">Oct 2021 - May 2022</p>
            <button className="c-btn" title="Download certificate in pdf"
            onClick={downloadFile}
            >
              Download certificate <Icon icon={downloadFile} />
            </button>
            <h1 className="c-number">01</h1>
          </div>

        
        </div>

        <div className="c-card-cont">
          <div className="c-info-cont">
            <h2>REACT DEVELOPER</h2>
            <p className="c-title">RISC</p>
            <div className="c-one">
              <p>
                Start second cyrcle of "IT Camp - Serbia 2023" course that cover
                React. 
                {/* We learn: */}
              </p>
              <div className="c-frontend-list">
                {/* <ul>
                  <li>
                  
                    <img src={arrow} alt="arrow" />
                    Modern JavaScript (ES6+), CSS3 and HTML5,
                  </li>
                  <li>
                  
                    <img src={arrow} alt="arrow" /> Write cross-browser
                    compatible code,
                  </li>
                  <li>
                  
                    <img src={arrow} alt="arrow" />
                    Apply best practices for software development,
                  </li>
                  <li>
                  
                    <img src={arrow} alt="arrow" /> Using version control system
                    (GitHub).
                  </li>
                </ul> */}
              </div>
            </div>
            <p className="c-title">Apr 2023</p>
            {/* <button className="c-btn" title="Download certificate in pdf">
              Download certificate <FontAwesomeIcon icon={faDownload} />
            </button> */}
            <h1 className="c-number">02</h1>
          </div>

          {/* <div className="c-img-cont">
          <img src={cyrcleOne} alt="certificate" />
          </div> */}
        </div>
      </div>
  )
}

export default Certificates