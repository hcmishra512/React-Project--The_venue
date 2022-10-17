import React from "react";
import { Drawer, List, ListItem } from "@mui/material";
import { Anchor } from "@mui/icons-material";

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venuenfo", value: "venue NFO" },
    { where: "highlights", value: "highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "location" },
  ];

  const renderItem = (item) => {
    return (
      <ListItem button onClick={() => alert(item.where)} key={item.where}>
        {item.value}
      </ListItem>
    );
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};

export default SideDrawer;
