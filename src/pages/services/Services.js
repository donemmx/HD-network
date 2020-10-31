import React from "react";
import "./Services.css";
import Four from "../../components/Sections/four/Four";
import Seven from "../../components/Sections/seven/Seven";
import Three from "../../components/Sections/three/Three";

function Services() {
  return (
    <div className="services">
      <Seven
        image={require("../../assets/About.png")}
        title="Services"
        subtitle="We’ve got everything you need to launch and grow your business"
        text=""
      />
      <Three
        title="Broadcast"
        text="HDN Digital TV Uplink Services take your broadcast-ready content and channels and comprehensively encode them using the most recent MPEG compression technologies, including optimized provisioning of bandwidth capacity on the chosen satellite and selection of the best satellite..."
        image={require("../../assets/broadcast.jpg")}
      />
      <Four
        bgImage={require("../../assets/gamingbg.png")}
        title="Gaming"
        text="We currently provide broadcast services to market leaders in the gaming industry across Africa and Europe, being the primary broadcast partner to a wide spectrum of players. With a Content Delivery Network spanning the entire African continent, no aspect of gaming broadcast is beyond..."
        image={require("../../assets/Gaming1.png")}
      />

      <Three
        title="Colocation Service"
        text="HDNETWORK is a Private satellite Teleport and satellite communication company that offers Vsat technology which is used in locations (such as Nigeria, our base) where terrestrial Internet connection and/or voice access is not available, not reliable, not good enough, or for security/privacy reasons"
        image={require("../../assets/internet1.png")}
      />
      <Four
        bgImage={require("../../assets/contentbg.png")}
        title="Content"
        text="HD NETWORKS has a strategic marketing approach focused on creating and distributing valuable and relevant content to attract and retain a clearly defined audience, ultimately, to drive profitable customer action. In HD NETWORKS, we do much more than creating, distributing and..."
        image={require("../../assets/content.png")}
      />

      <Three
        title="Consulting"
        text="The strategic partnerships we have built over the years have given us local and trans-continental reach, expanding through Africa, Europe and the Middle East. This gives us the advantage of economies of scale which enables...
        "
        image={require("../../assets/consulting1.png")}
      />
      <Four
        bgImage={require("../../assets/streamingbg.png")}
        title="Streaming Services"
        text="we provide a range of bespoke solutions to suit your live streaming demands."
        image={require("../../assets/streaming1.png")}
      />
      <Three
        title="Satellite Hardware and Accessories"
        text="We Guarantee to provide the most efficient and cost effective Hardware for our domestic and enterprise Customers."
        image={require("../../assets/hardware.png")}
      />
    </div>
  );
}

export default Services;
