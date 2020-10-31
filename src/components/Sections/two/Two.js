import React from "react";
import Card from "../../card/Card";
import "./Two.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Two({ title, subtitle, image }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="two">
      <div className="two__left">
        <h3 data-aos="slide-right">What We Do</h3>
        <h2 data-aos="fade-down">
          We’ve got everything you need to launch and grow your business
        </h2>
        <div className="line"></div>
      </div>
      <div className="two__right">
        <div data-aos="fade-left" className="two__rightCard">
          <Card
            icon={require("../../../assets/broadcast-icon.svg")}
            title="Broadcast"
            text="Use broadcast-ready content and channels and encode them using recent MPEG compression technologies."
          />
          <Card
            icon={require("../../../assets/gaming-icon.svg")}
            title="Gaming"
            text="We currently provide broadcast services to market leaders in the gaming industry across Africa and Europe."
          />
          <Card
            icon={require("../../../assets/internet-icon.svg")}
            title="colocation service"
            text="Offers Vsat technology which is used in locations where terrestrial Internet connection and/or voice access is not available."
          />
          <Card
            icon={require("../../../assets/content-icon.svg")}
            title="Content"
            text="Strategic marketing approach focused on creating and distributing valuable and relevant content to attract. "
          />
        </div>
        <div className="two__bottomCard" data-aos="fade-up">
          <Card
            icon={require("../../../assets/consultation-icon.svg")}
            title="Consulting"
            text="The strategic partnerships we have built over the years have given us local and trans-continental reach. "
          />
          <Card
            icon={require("../../../assets/streaming-icon.svg")}
            title="Streaming Services"
            text="At HD Network, we provide a range of bespoke streaming solutions to suit your live streaming demands."
          />
          <Card
            icon={require("../../../assets/satellite-icon.svg")}
            title="Satellite Hardware & Accessories"
            text="We provide the most efficient and cost effective Hardware for our domestic and enterprise Customers."
          />
        </div>
      </div>
    </div>
  );
}

export default Two;
