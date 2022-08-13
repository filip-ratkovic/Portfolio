import React from 'react'
import photo from "./photo.png";

function Home() {
  return (
    <main className="home">
        <div className="homeText">
            <div className="wrapText">
            <div className="staticText">Hi! I am</div>
            <ul className="dynamicText" >
                <li><span>Web developer</span></li>
                <li><span>Filip Ratković</span></li>
            </ul>
            </div>
            <p>Lorem ipsum dolor sit ametss, consectetur adipisicing elit. Consequatur consectetur voluptates vero provident neque molestiae velit ratione accusantium officiis repudiandae! Reiciendis temporibus similique quod vero tempore perferendis vitae sit explicabo.

            </p>
            <button><h4>Hire me</h4></button>
        </div>
        <div className="homeImg">
            <div className="containerAnime">
            <div className="imgContainer">
                <div className="border">
                <img src={photo} width="380px" alt="" />
                </div>
                
            </div>
            </div>
        </div>

    </main>
  )
}

export default Home