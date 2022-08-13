import React from 'react'
import cattle from "./cattle.png"
import avengers from "./avengers.png"

function Projects() {
  return (
    <main className="main">
        <div className="projectsContainer">
            <div className="projectText">
                <h2>Project</h2>
                <h1>Cattle</h1>
                <h5>Lorem, ipsum dolor.
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit, officiis similique, ab ipsa consequuntur</p>
                <button><a target="_blank" href="https://filip-ratkovic.github.io/Udemy/cattle/index.html">Explore ↗ </a> </button>
            </div>
            <div className="projects" >
            <img src={cattle} alt="" />
            <div className="png">
                {/* <img src={avengers} alt="Avengers" /> */}
            </div>
            </div>
        </div>
    </main>
  )
}

export default Projects