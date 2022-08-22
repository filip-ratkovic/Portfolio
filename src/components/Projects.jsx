import { React, useState } from 'react'
import cattle from "./photos/cattle.png"
import avengers from "./photos/avengers.png"
import movie from "./photos/movie.png"

function Projects() {
    const [leftActive, setLeftActive] = useState(true);
    const [rightActive, setRightActive] = useState(false);


    const clickHandlerLeft = event => {
        if (leftActive) {

        } else {
            setLeftActive(current => !current);
            setRightActive(false);
        }
    }

    const clickHandlerRight = event => {

        if (rightActive) {

        } else {
            setRightActive(current => !current);
            setLeftActive(false);
        }

    }
    return (
        <main className="main">
            <div className="projectsContainer">
                <div className="projectText">
                    <h2>Project</h2>
                    <h1>Movie DB</h1>
                    <h5>Lorem, ipsum dolor.
                    </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit, officiis similique, ab ipsa consequuntur</p>
                    <button><a target="_blank" href="https://filip-ratkovic.github.io/grupa-6/movie/index.html">Explore ↗ </a> </button>
                </div>
                <div className="projectPhoto">
                    <div className={`projects ${leftActive ? 'active' : ''}`}
                        onClick={clickHandlerLeft} style={{ backgroundImage: `url(${movie})` }}>
                    </div>
                    <div className={`projects ${rightActive ? 'active' : ''}`}
                        onClick={clickHandlerRight}>
                    </div>
                </div>
            </div>

            <hr />

            <div className="projectsContainer">
                <div className="projectText">
                    <h2>Project</h2>
                    <h1>Movie DB</h1>
                    <h5>Lorem, ipsum dolor.
                    </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit, officiis similique, ab ipsa consequuntur</p>
                    <button><a target="_blank" href="https://filip-ratkovic.github.io/Udemy/cattle/index.html">Explore ↗ </a> </button>
                </div>
                <div className="projectPhoto">
                    <div className={`projects ${leftActive ? 'active' : ''}`}
                        onClick={clickHandlerLeft} style={{ backgroundImage: `url(${cattle})` }}>
                    </div>
                    <div className={`projects ${rightActive ? 'active' : ''}`}
                        onClick={clickHandlerRight}>
                    </div>
                </div>
            </div>

            <hr />



        </main>
    )
}

export default Projects