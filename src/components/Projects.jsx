import { React, useState } from 'react'
import cattle from "./photos/cattle.png"
import avengers from "./photos/avengers.png"
import movie from "./photos/movie.png"
import cattleM from "./photos/cattleM.jpg"
import movieM from "./photos/movieM.jpg"
import shop from "./photos/shop.png"
import shopM from "./photos/shopM.jpg"


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
                    <h1>Commerce</h1>
                    <h5>Furniture site.
                    </h5>
                    <p>I use api for that project, where i create web shop for selling furniture.</p>
                    <button><a className="explore" target="_blank" href="https://fr-ecommerce.netlify.app/">Explore ↗ </a> </button>
                </div>
                <div className="projectPhoto">
                    <div className="projects"
                        style={{ backgroundImage: `url(${shop})` }}>
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
                        <div className="smallImg" style={{ backgroundImage: `url(${shopM})` }}>
                        </div>
                    </div>


                </div>
            </div>

            <br />
            <hr />

            <div className="projectsContainer">
                <div className="projectText">
                    <h2>Project</h2>
                    <h1>Movie DB</h1>
                    <h5>Movie database.
                    </h5>
                    <p>I use api for that project, where you can see information and rate about movies.</p>
                    <button><a target="_blank" href="https://filip-ratkovic.github.io/grupa-6/movie/index.html" className="explore"
                    >Explore ↗ </a> </button>
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

            <br />
            <hr />

        </main>
    )
}

export default Projects