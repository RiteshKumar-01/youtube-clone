import { Avatar } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "./youtube-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header_logo">
        <MenuIcon />
        <img className="header_image" src={logo} alt="Youtube-Logo" />
      </div>

      <div className="header_search">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header_searchIcon" />
        <MicIcon className="header_micIcon" />
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar className="header_icon" />
      </div>
    </div>
  );
}

export default Header;
