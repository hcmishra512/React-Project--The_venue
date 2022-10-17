import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const toggleDrawer = (value) => {
    setOpenDrawer(value);
  };

  const scrollHandler = () => {
    if (window.scrollY > 0) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        padding: "10px 0",
        boxShadow: "none",
        backgroundColor: showHeader ? "#2f2f2f" : "transparent",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>
        <IconButton
          area-lavel="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer
          open={openDrawer}
          onClose={(value) => toggleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
