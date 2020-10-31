import React from "react";
import "./Seven.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Seven({ title, subtitle, text, image, id }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="seven__main" id={id}>
      <div data-aos="slide-down" className="seven__left">
        <img src={image} id="about" />
      </div>
      <div data-aos="fade-right" className="seven__right">
        <h3>{title} </h3>
        <h2>{subtitle}</h2>
        <div className="line"></div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Seven;
