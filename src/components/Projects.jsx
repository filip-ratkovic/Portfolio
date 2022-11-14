import { React, useState } from 'react'
import cattle from "./photos/cattle.png"
import avengers from "./photos/avengers.png"
import movie from "./photos/movie.png"
import cattleM from "./photos/cattleM.jpg"
import movieM from "./photos/movieM.jpg"
import Clock from 'react-clock'

function Projects() {
    const [leftActive, setLeftActive] = useState(true);
    const [rightActive, setRightActive] = useState(false);
    const time = new Date();
    const clock = `${time.getHours()}:${time.getMinutes()}`

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
                    <button><a target="_blank" href="https://filip-ratkovic.github.io/Udemy/cattle/index.html">Explore ↗ </a> </button>
                </div>
                <div className="projectPhoto">
                    <div className="projects"
                        style={{ backgroundImage: `url(${movie})` }}>
                    </div>
                    <div className="smallImageCont">
                        <div className="smallImgUp">
                            <div className="clock">
                                <p>{clock}</p>
                            </div>
                            <div className="blackSpace">
                            </div>
                            <div className="signal">
                                <img src="https://img.icons8.com/ios-filled/50/null/high-connection.png" />
                                <p>4G</p>
                                <img src="https://img.icons8.com/ios-glyphs/30/null/full-battery.png" />
                            </div>
                        </div>
                        <div className="smallImg" style={{ backgroundImage: `url(${movieM})` }}>
                        </div>
                    </div>


                </div>
            </div>


            <hr />

            <div className="projectsContainer">
                <div className="projectText">
                    <h2>Project</h2>
                    <h1>Cattle</h1>
                    <h5>Lorem, ipsum dolor.
                    </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit, officiis similique, ab ipsa consequuntur</p>
                    <button><a target="_blank" href="https://filip-ratkovic.github.io/Udemy/cattle/index.html">Explore ↗ </a> </button>
                </div>
                <div className="projectPhoto">
                    <div className="projects"
                        style={{ backgroundImage: `url(${cattle})` }}>
                    </div>
                    <div className="smallImageCont">
                        <div className="smallImgUp">
                            <div className="clock">
                                <p>{clock}</p>
                            </div>
                            <div className="blackSpace">
                            </div>
                            <div className="signal">
                                <img src="https://img.icons8.com/ios-filled/50/null/high-connection.png" />
                                <p>4G</p>
                                <img src="https://img.icons8.com/ios-glyphs/30/null/full-battery.png" />
                            </div>
                        </div>
                        <div className="smallImg" style={{ backgroundImage: `url(${cattleM})` }}>
                        </div>
                    </div>


                </div>
            </div>

            <hr />



        </main>
    )
}

export default Projects