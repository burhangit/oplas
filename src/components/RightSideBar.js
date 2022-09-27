import React from "react";
import "./rightSideBar.css";
// import { useState } from "react";
import right_aside from "../images/right_aside.jpg";

export const RightSideBar = () => {
  return (
    <div className="right_aside">
      <img src={right_aside} alt="righsidebarimage" width="220" height="606" />
    </div>
  );
};
