import React from "react";
import "./Four.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Four({ title, text, image, bgImage }) {
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 10000 });
  }, []);

  return (
    <div
      className="main__four"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="four">
        <div data-aos="fade-right" className="four__left">
          <h2>{title}</h2>
          <p>{text}</p>
          <button id="four__left"> Read More</button>
        </div>
        <div data-aos="fade-left" className="four__right">
          <div className="four__image">
            <img className="broadcast" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Four;
