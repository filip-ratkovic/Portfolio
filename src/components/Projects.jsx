import React from 'react'
import cattle from "./photos/cattle.png"
import avengers from "./photos/avengers.png"
import movie from "./photos/movie.png"

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
            </div>
            </div>
        </div>

        <hr />
                         {/* PROJECT MOVIE DB  */}

        <div className="projectsContainer">
            <div className="projectText">
                <h2>Project</h2>
                <h1>Movie DB</h1>
                <h5>Lorem, ipsum dolor.
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit, officiis similique, ab ipsa consequuntur</p>
                <button><a target="_blank" href="https://filip-ratkovic.github.io/grupa-6/movie/index.html">Explore ↗ </a> </button>
            </div>
            <div className="projects" >
            <img src={movie} alt="" />
                <img id="pngPhoto" src={avengers} alt="Avengers" />
            </div>
        </div>
    </main>
  )
}

export default Projects