import React from "react";
import { Button } from "@mui/material";

import ticketIcon from "../../resources/images/icons/ticket.png";

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      target="_blank"
      size={props.size ? props.size : "large"}
      style={{ background: "#8e8e8e", color: "#fff", ...props.style }}
    >
      {props.iconTicket ? (
        <img src={ticketIcon} className="iconImage" alt="icon_button" />
      ) : null}

      {props.text}
    </Button>
  );
};

export default MyButton;
