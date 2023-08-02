import React, { useEffect, useState } from 'react'
import "./home.css"
import portret from "../../slike/portret.jpg"
import { Button } from '@mui/material'

function Home() {
  const [textEl, setTextEL] = useState('')
  const [homeActive, setHomeActive] =useState(false);

  let text = ["Filip Ratkovic", "Web developer"]
  let LengthIdx = 0;
 let Idx = 1;

 useEffect(() => {
  autoTextEffect()
  setTimeout(()=> {
    setHomeActive(true)
  },2500)
}, [])
  const autoTextEffect = () => {
      setTextEL(`${text[LengthIdx].slice(0,Idx)}`)
      Idx ++;
      if(Idx > text[LengthIdx].length) {
          Idx = 1;
          LengthIdx ++
      }

      if(LengthIdx > text.length-1) {
          LengthIdx = 0
      }

      setTimeout(autoTextEffect, 200)
  }
  return (
      <div className='home-container' id='home'>
        <div className="home-text-wrapper">
          <div className={`home-text ${homeActive ? "home-active" : ""}`}>
            <div className="wrap-text">
            <div className="static-text">Hi! I am</div>
                <h1 id="home-text-move">{textEl}</h1>
            </div>
            <p>
            Front end developer who write  
            clean, elegant and efficient code. <br />
            I'm from Serbia and open to work.
            </p>
            <Button variant="contained"
             style={{backgroundColor:"#14cf93", borderRadius:"8px", padding:"5px 20px"}}>
               <a id="hireme" href="https://www.linkedin.com/in/filip-ratkovic-067a96233/" target="_blank">
                 <h3 title='Linkedin link'>HIRE ME</h3>    
            </a></Button>
        </div>
        </div>
          <div className={`home-img ${homeActive ? "img-active" : ""}`} style={{backgroundImage:`url(https://images.unsplash.com/photo-1514929781313-76fcbb2136b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80)`}}>
                      {/* <div className="home-img" style={{backgroundImage:`url(${portret})`}}> */}

          </div>
      </div>
  )
}

export default Home