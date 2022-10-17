import React from "react";
import { Zoom } from "react-awesome-reveal";

import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom className="vn_item">
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${icon_calendar})` }}
                  ></div>
                  <div className="vn_title">Event date & time</div>
                  <div className="vn_desc">Jan, 1 @08:30:00PM</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom className="vn_item" delay={500}>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${icon_location})` }}
                  ></div>
                  <div className="vn_title">Event location</div>
                  <div className="vn_desc">Mayur Vihar Ph-1 Delhi</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
