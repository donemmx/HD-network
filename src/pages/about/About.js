import React from "react";
import Seven from "../../components/Sections/seven/Seven";
import "./About.css";

function About() {
  return (
    <div className='about'>
      <Seven
        image={require("../../assets/About.png")}
        title="About Us"
        subtitle="What makes  us different"
        text="HD-NETWORKS is one of Nigeria’s leading broadcast service providers. We offer an extensive range of satellite communication services to the corporate, media, NGO and government sectors.
        Strategically located in the heart of Lagos, we offer Satellite Teleport services to a geographically diverse and multi-disciplined customer base and operate numerous antennas on geostationary satellites, providing data, voice and broadcast services."
      />
    </div>
  );
}

export default About;
