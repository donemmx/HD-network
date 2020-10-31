import React from "react";
import "./Three.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Three({ title, text, image }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="three">
      <div data-aos="fade-right" className="three__left">
        <h2>{title} </h2>
        <p>{text}</p>
        <button id="left">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Read More
        </button>
      </div>
      <div data-aos="fade-left" className="three__right">
        <div className="three__image">
          <img className="broadcast" src={image} />
        </div>
      </div>
    </div>
  );
}

export default Three;
