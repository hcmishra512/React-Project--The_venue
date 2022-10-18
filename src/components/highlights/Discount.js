import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

import MyButton from "../ui/MyButton";

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);
  console.log(start);

  const porcentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            console.log(inView);
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="descount_description">
            <h3>Purchase the ticket before 15th December </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
              deleniti, voluptatum cumque dignissimos vitae, necessitatibus
              delectus harum nostrum consequuntur quaerat minima! Porro
              similique dolor iusto, aliquam molestias dolorum dicta. Amet.
            </p>
            <MyButton
              text="Purchase Tickets"
              link="http://google.com"
              size="small"
              style={{ background: "#ffa800", color: "#fff" }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
