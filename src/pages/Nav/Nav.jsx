import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import { Link } from "react-scroll";

function Nav() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [navActive, setNavActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const aboutRef = useRef()



  useEffect(() => {
    setTimeout(() => {
      setNavActive(true);
    }, 3800);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  const handleHomeClick = () => {
      setHomeActive(true)
      setAboutActive(false)
      setProjectsActive(false)
  };
  const handleAboutClick = () => {
    setAboutActive(true)
    setHomeActive(false)
    setProjectsActive(false)
};
const handleProjectsClick = () => {
  setProjectsActive(true)
  setHomeActive(false)
  setAboutActive(false)
};


  window.addEventListener("scroll", () => {
    setWindowHeight(window.scrollY);
  });
  return (
    <nav
      className={`${windowHeight > 100 ? "nav-active" : ""} ${
        navActive ? "nav-move-active" : ""
      }`}
    >
      <div className="nav-name">
        <Link
          onClick={() => {
            scrollToTop();
            handleHomeClick();
          }}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <h1>Filip Ratkovic</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link
          onClick={() => {
            scrollToTop();
            handleHomeClick();
          }}
          smooth={true}
          spy={true}
          offset={50}
          duration={500}
          className={`${homeActive ? "link-active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="about"
          onClick={(e)=> {
            handleAboutClick()
            console.log(e.target.value)
          }}
          smooth={true}
          spy={true}
          offset={-50}
          duration={500}
          className={`${aboutActive ? "link-active" : ""}`}
        >
          About
        </Link>
        <Link
          className={`${projectsActive ? "link-active" : ""}`}
          to="projects"
          onClick={handleProjectsClick}
          smooth={true}
          offset={0}
          spy={true}
          duration={500}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default Nav;