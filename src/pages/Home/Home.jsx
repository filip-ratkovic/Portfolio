import React, { useEffect, useState } from "react";
import "./home.css";
import portret from "../../slike/portret.jpg";
import portret2 from "../../slike/portret2.jpg";
import portret3 from "../../slike/portret3.jpg";
import portret4 from "../../slike/portret4.jpg";
import { Button } from "@mui/material";

function Home() {
  const [textEl, setTextEL] = useState("");
  const [homeActive, setHomeActive] = useState(false);

  let text = ["Filip Ratkovic", "Web developer"];
  let LengthIdx = 0;
  let Idx = 1;

  useEffect(() => {
    autoTextEffect();
    setTimeout(() => {
      setHomeActive(true);
    }, 2500);
  }, []);
  const autoTextEffect = () => {
    setTextEL(`${text[LengthIdx].slice(0, Idx)}`);
    Idx++;
    if (Idx > text[LengthIdx].length) {
      Idx = 1;
      LengthIdx++;
    }

    if (LengthIdx > text.length - 1) {
      LengthIdx = 0;
    }

    setTimeout(autoTextEffect, 200);
  };
  return (
    <div className="home-container" id="home">
      <div className="home-text-wrapper">
        <div className={`home-text ${homeActive ? "home-active" : ""}`}>
          <div className="wrap-text">
            <div className="static-text">Hi! I am</div>
            <h1 id="home-text-move">{textEl}</h1>
          </div>
          <p>
            Front end developer who write clean, elegant and efficient code.
            <br />
            I'm from Serbia and open to work.
          </p>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#14cf93",
              borderRadius: "8px",
              padding: "5px 20px",
            }}
          >
            <a
              id="hireme"
              href="https://www.linkedin.com/in/filip-ratkovic-067a96233/"
              target="_blank"
            >
              <h3 title="Linkedin link">HIRE ME</h3>
            </a>
          </Button>
        </div>
      </div>
      <div
        className={`home-img ${homeActive ? "img-active" : ""}`}
        style={{
          backgroundImage: `url(${portret})`,
        }}
      >
        {/* <div className={`home-img ${homeActive ? "img-active" : ""}`} style={{backgroundImage:`url(${portret})`}}> */}
      </div>
    </div>
  );
}

export default Home;
