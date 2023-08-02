import React, { useEffect, useState } from "react";
import "./nav.css";
import {Link} from "react-scroll"



function Nav() {
  const [windowHeight, setWindowHeight] = useState(0)
  const [navActive, setNavActive] = useState(false)
  const [click, setClick] = useState(false)

  useEffect(()=>{
    setTimeout(()=> {
      setNavActive(true)
    },3800)
  },[])

  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  window.addEventListener("scroll" , ()=> {
    setWindowHeight(window.scrollY)
  }
  )
  return (
    <nav className={`${windowHeight > 100 ? "nav-active" : ""} ${navActive ? "nav-move-active" : ""}`}>
      <div className="nav-name">
        <h1>Filip Ratkovic</h1>
      </div>
      <div className="nav-links">
      <Link  to="home" onClick={closeMenu} smooth={true} offset={50} duration={500}>Home</Link>
      <Link   to="about" onClick={closeMenu} smooth={true} offset={50} duration={500}>About</Link>
      <Link   to="projects" onClick={closeMenu} smooth={true} offset={50} duration={500}>Projects</Link>
      <Link to="contact" onClick={closeMenu} smooth={true} offset={50} duration={500}>Contact</Link>
      </div>
    </nav>
 
  );
}

export default Nav;
