import React from "react";
import "./Hero.css";
import video from "../../assets/video/hd-video.webm";

function Hero() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>HD <span>NETWORKS </span></h1>
      <p>Think Possibilities ….</p>
      <div className="hero__scroll"></div>
    </div>
  );
}

export default Hero;
