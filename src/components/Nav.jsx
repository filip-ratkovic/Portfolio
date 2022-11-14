import { React, useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';


function Nav() {

    const [homeActive, setHomeActive] = useState(true);
    const [projectActive, setProjectActive] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);


    const handleHomeClick = event => {
        if (homeActive) {

        }
        else {
            setHomeActive(current => !current);
            setAboutActive(false)
            setProjectActive(false);
            setContactActive(false)
        }
    };

    const handleAboutClick = event => {
        if (aboutActive) { }
        else {
            setAboutActive(current => !current);
            setHomeActive(false)
            setProjectActive(false);
            setContactActive(false)
        }
    };

    const handleProjectClick = event => {
        if (projectActive) { }
        else {
            setProjectActive(current => !current);
            setAboutActive(false)
            setHomeActive(false);
            setContactActive(false)
        }
    };

    const handleContactClick = event => {
        if (contactActive) { }
        else {
            setContactActive(current => !current);
            setAboutActive(false)
            setProjectActive(false);
            setHomeActive(false)
        }
    };

    return (
        <nav className="nav">
            <div className="navName">
                <Link id="navLink" to={"/"}>
                    <h3 className={` ${homeActive ? "active" : ""}`} onClick={handleHomeClick}
                    >Filip Ratković</h3></Link>
            </div>
            <div className="navList">
                <Link id="navLink" to="/about"><p
                    className={` ${aboutActive ? "active" : ""}`} onClick={handleAboutClick}
                >About me</p></Link>
                <Link id="navLink" to="/project"><p
                    className={` ${projectActive ? "active" : ""}`} onClick={handleProjectClick}
                >Projects</p></Link>
            </div>

        </nav>
    )
}

export default Nav