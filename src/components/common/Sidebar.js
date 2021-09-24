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
          <a href="/Onboarding">
            <span className="icon">
              {" "}
              <PersonOutlineOutlinedIcon />
            </span>
            <span className="title">OnBoarding</span>
          </a>
        </li>
        <li className="list">
          <a href="/Dashboard">
            <span className="icon">
              <ChatBubbleOutlineOutlinedIcon />
            </span>
            <span className="title">Inventory DashBoard</span>
          </a>
        </li>

        <li className="list">
          <a href="/MarketPlaceHealth">
            <span className="icon">
              {/* <SettingsOutlinedIcon /> */}
              <lord-icon
                src="https://cdn.lordicon.com/hdiorcun.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#08a88a"
                // colors="primary:#121331,secondary:#08a88a"
                stroke={120}
                // style={{ width: "100px", height: "250px" }}
              ></lord-icon>
            </span>
            <span className="title">MarketPlace Health</span>
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
