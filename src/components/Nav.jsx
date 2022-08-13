import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function Nav() {





    return (
        <nav className="nav">
            <div className="navName">
                <Link id="navLink" to={"/"}>
                    <h3>Filip Ratković</h3></Link>
            </div>
            <div className="navList">
                <Link id="navLink" to="/about"><p >About me</p></Link>
                <Link id="navLink" to="/project"><p >Projects</p></Link>
                <Link id="navLink" to="/contact"><p >Contact</p></Link>
            </div>

        </nav>
    )
}

export default Nav