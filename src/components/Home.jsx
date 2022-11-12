import React from 'react'
import photo from "./photos/photo.png";

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
            <p>
            Front end developer who write  
            clean, elegant and efficient code. <br />
            I'm from Serbia and open to work.
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