import React from "react";
import MyButton from "../ui/MyButton";
import { Zoom } from "react-awesome-reveal";

const Prices = () => {
  const priceState = {
    prices: [125, 200, 300],
    position: ["Lower", "Medium", "Balcony"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus eveniet voluptas.",
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis in ab et necessitatibus eos.",
    ],
    linkTo: ["http://salse.b", "http://salse.m", "https://sales.tickets.com"],
    delay: [500, 0, 500],
  };
  const showBoxes = () => {
    return priceState.prices.map((box, index) => (
      <Zoom
        key={index}
        className="pricing_item"
        delay={priceState.delay[index]}
      >
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>₹{priceState.prices[index]}</span>
            <span>{priceState.position[index]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[index]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="pruchase"
              size="small"
              style={{ background: "#ffa800", color: "#fff" }}
              link={priceState.linkTo[index]}
            />
          </div>
        </div>
      </Zoom>
    ));
  };
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Prices;
