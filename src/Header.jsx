import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import "./App.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-menu">
        <AiOutlineMenu style={{ color: "white" }} size={24} />
      </div>
      <div className="github-icon">
        <FaGithub style={{ color: "white" }} size={36} />
      </div>
      <div className="notification">
        <MdNotificationsNone style={{ color: "white" }} size={36} />
      </div>
    </div>
  );
}
