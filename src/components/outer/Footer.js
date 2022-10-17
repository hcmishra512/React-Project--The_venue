import React from "react";
import { Fade } from "react-awesome-reveal";
const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade triggerOnce delay={1000}>
        <div className="font_righteous footer_logo_venue">The venue</div>
        <div className="footer_copyright">
          The Venue 2023 all right reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
