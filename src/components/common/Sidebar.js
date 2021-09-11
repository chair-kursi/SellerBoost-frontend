import React from "react";
import "../../css/Sidebar.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="list ">
          <a href="">
            <span className="icon">
              <HomeOutlinedIcon />
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li className="list">
          <a href="">
            <span className="icon">
              {" "}
              <PersonOutlineOutlinedIcon />
            </span>
            <span className="title">Profile</span>
          </a>
        </li>
        <li className="list">
          <a href="">
            <span className="icon">
              <ChatBubbleOutlineOutlinedIcon />
            </span>
            <span className="title">Messages</span>
          </a>
        </li>

        <li className="list">
          <a href="">
            <span className="icon">
              <SettingsOutlinedIcon />
            </span>
            <span className="title">Setting</span>
          </a>
        </li>

        <li className="list">
          <a href="">
            <span className="icon">
              <HelpOutlineOutlinedIcon />
            </span>
            <span className="title">Help</span>
          </a>
        </li>
        <li className="list">
          <a href="">
            <span className="icon">
              <LockOutlinedIcon />
            </span>
            <span className="title">Password</span>
          </a>
        </li>
        <li className="list">
          <a href="">
            <span className="icon">
              <ExitToAppOutlinedIcon />
            </span>
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
