import React, { useEffect, useState } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../animations";

function PreLoader() {
  const [spanActive, setSpanActive] = useState(false);


  useEffect(()=> {
      preLoaderAnim()
      setTimeout(()=> {
        setSpanActive(true)
      },1100)
  },[])
  return (
    <div className="preloader">
      <div className="text-container">
      <span className={`preloader-text ${spanActive ? "active1" : ""}`}>Developer</span>
      <span className={`preloader-text ${spanActive ? "active2" : ""}`}>React</span>
      <span className={`preloader-text ${spanActive ? "active3" : ""}`}>Creative</span>
      </div>
    </div>
  );
}

export default PreLoader;
