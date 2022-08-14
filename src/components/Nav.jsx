import {React, useEffect, useState} from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';


function Nav() {

// const [isActive, setIsActive] = useState(false);
useEffect(() => {
    const test = document.querySelectorAll(".test");
console.log(test);

test.forEach((el) => {
    el.addEventListener("click",()=>{

removeActive();
        el.classList.toggle("active")

    })
})

const  removeActive = (el) => {
    test.forEach((el) => {
        el.classList.remove("active")
    })
    }
})







    return (
        <nav className="nav">
            <div className="navName">
                <Link  id="navLink" to={"/"}>
                    <h3 className="test">Filip Ratković</h3></Link>
            </div>
            <div className="navList">
                <Link id="navLink" to="/about"><p className="test" >About me</p></Link>
                <Link id="navLink" to="/project"><p className="test" >Projects</p></Link>
                <Link id="navLink" to="/contact"><p className="test" >Contact</p></Link>
            </div>

        </nav>
    )
}

export default Nav