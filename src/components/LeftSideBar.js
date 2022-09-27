import React, { useState } from "react";
import "./leftSideBar.css";
import { HiPlusSm } from "react-icons/hi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsTrophyFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsQuestionLg } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { ImGoogle2 } from "react-icons/im";
import { Link } from "react-router-dom";
import Auth from "../auth/Auth";

export const LeftSideBar = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="left_side_bar">
      <button id="ask_question" onClick={() => setModalShow(true)}>
        <HiPlusSm size="20" />
        ASK A QUESTION
      </button>

      <Auth isLogin show={modalShow} onHide={() => setModalShow(false)} />

      <div className="left_side_hr"></div>
      {/**************   left side bar list ***********/}
      <div className="left_side_bar_list">
        <ul>
          <li>
            <AiFillQuestionCircle color="#56af3e" />

            <a href="#">
              <Link to="questions" style={{ color: "#56af3e" }}>
                Questions
              </Link>
            </a>
          </li>
          <li>
            <BsTrophyFill color="#56af3e" />

            <a href="#">Badges</a>
          </li>
          <li>
            <BiCategory color="#56af3e" />
            <a href="#">
              <Link to="categories" style={{ color: "#56af3e" }}>
                Categories{" "}
              </Link>
            </a>
          </li>
          <li>
            <FaUsers color="#56af3e" />
            <a href="#">Users</a>
          </li>
          <li>
            <BsQuestionLg color="#56af3e" />
            <a href="#">
              <Link style={{ color: "#56af3e" }} to="questionsbylevel">
                Question By Level
              </Link>
            </a>
          </li>
        </ul>
      </div>

      {/************ social icons *************/}
      <div className="left_sidebar_social_icons">
        <ul>
          <li>
            <FaFacebookSquare size="30" style={{ opacity: "0.5" }} />
          </li>
          <li>
            <FaTwitterSquare size="30" style={{ opacity: "0.5" }} />
          </li>
          <li>
            <ImGoogle2 size="26" style={{ opacity: "0.5" }} />
          </li>
        </ul>
      </div>
      <div className="left_sidebar_footer">
        <small>©2022 Oplas Answer Inc</small>
        <small>Terms | Privacy</small>
      </div>
    </div>
  );
};
