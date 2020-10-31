import React from "react";
import "./One.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function One({ heading, subheading, text, image1, image2 }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="section__main">
      <div className="section">
        <div className="section__left">
          <h3 data-aos="slide-right">HELLO THERE </h3>
          <h2 data-aos="fade-down">We Are HD-Networks Think Possibilities </h2>
          <div className="line"></div>
          <p data-aos="fade-right">
            HD-NETWORKS is one of Nigeria’s leading broadcast service providers.
            We offer an extensive range of satellite communication services to
            the corporate, media, NGO and government sectors. Strategically
            located in the heart of Lagos, we offer Satellite Teleport services
            to a geographically diverse and multi-disciplined customer base and
            operate numerous antennas on geostationary satellites, providing
            data, voice and broadcast services.
          </p>
        </div>
        <div className="section__right">
          <img
            data-aos="fade-left"
            src={require("../../../assets/dish.png")}
            id="dish"
          />
          <img src={require("../../../assets/HD_NET.png")} id="hd" />
        </div>
      </div>
    </div>
  );
}

export default One;
