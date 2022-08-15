import { React, useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';


function Nav() {



    // useEffect(() => {
    //     const test = document.querySelectorAll(".test");
    // console.log(test);

    // test.forEach((el) => {
    //     el.addEventListener("click",()=>{

    // removeActive();
    //         el.classList.toggle("active")

    //     })
    // })

    // const  removeActive = (el) => {
    //     test.forEach((el) => {
    //         el.classList.remove("active")
    //     })
    //     }
    // })

    const [homeActive, setHomeActive] = useState(false);
    const [projectActive, setProjectActive] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);


    const handleHomeClick = event => {
        setHomeActive(current => !current);
        setAboutActive(false)
        setProjectActive(false);
        setContactActive(false)
    };

    const handleAboutClick = event => {
        setAboutActive(current => !current);
        setHomeActive(false)
        setProjectActive(false);
        setContactActive(false)
    };

    const handleProjectClick = event => {
        setProjectActive(current => !current);
        setAboutActive(false)
        setHomeActive(false);
        setContactActive(false)
    };

    const handleContactClick = event => {
        setContactActive(current => !current);
        setAboutActive(false)
        setProjectActive(false);
        setHomeActive(false)
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
                <Link id="navLink" to="/contact"><p
                    className={` ${contactActive ? "active" : ""}`} onClick={handleContactClick}

                >Contact</p></Link>
            </div>

        </nav>
    )
}

export default Nav