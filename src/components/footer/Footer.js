import React from "react";
import "./Footer.css";
import SendIcon from "@material-ui/icons/Send";

function Footer() {
  const scroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer__main">
      <div className="footer">
        <div className="footer__top">
          <div className="top__location">
            <h4> Location </h4>
            <p>Kemp House 160 City Road, London EC1V 2NX</p>
            <p>
              Plot 4B Jubilee/CMD road, Magodo, Lagos. Nigeria.
              info@hd-networks.com
            </p>

            <p> Mobile: +23481 2224 5121 </p>
            <p> Phone: +44 7456 171838 </p>
          </div>
          <div className="top__subscribe">
            <h4>Subscribe</h4>
            <div className="form">
              <input type="email" />
              <div className="footer__Searchicon">
                <SendIcon className="footer__Icon" />
              </div>
            </div>
            <p>
              Keep up with all the latest news by subscribing to our Newsletter.
              You can unsubscribe at any time.
            </p>
          </div>
          <div className="top__button" onClick={scroll}>
            <div className="arrow"></div>
            <p> Back to top </p>
          </div>
        </div>
        <div className="footer__bottom">
          <p> © Copyright HD-Networks 2020</p>
          <img
            src={require("../../assets/HD_White.svg")}
            alt="HD Network Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
