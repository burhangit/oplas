import "./header.css";
import React, { useState } from "react";
import Logo from "../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { BsQuestionLg } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Auth from "../auth/Auth";
import right_aside from "../images/right_aside.jpg";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsTrophyFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

export const Header = (props) => {
  const [showNavLists, setShowNavLists] = useState(false);
  const [showLeftSideList, setShowLeftSideList] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [showRightBanner, setShowRightBanner] = useState(false);

  const handleNavLists = (e) => {
    e.preventDefault();
    setShowNavLists(!showNavLists);
  };

  const handleLeftSideList = (e) => {
    e.preventDefault();
    setShowLeftSideList(!showLeftSideList);
  };

  return (
    <>
      <div id="header">
        <div className="header_left">
          <div className="responsive_icons">
            <BsQuestionLg
              size="20"
              id="ques_icon"
              style={{ cursor: "pointer" }}
              onClick={handleLeftSideList}
            />
            <GoGraph
              size="20"
              id="rightSide_icon"
              onClick={() => setShowRightBanner(!showRightBanner)}
            />
            <GiHamburgerMenu
              size="20"
              id="hamburger_icon"
              onClick={handleNavLists}
            />
          </div>
          <img src={Logo} alt="logo" style={{ cursor: "pointer" }} />
          <div className="searchbar">
            <input type="search" placeholder="Enter Keywords" />
            <SearchIcon id="search_icon" />
          </div>
        </div>

        <div className="header_right">
          <div
            className="header_list1"
            style={{ display: `${showNavLists ? "initial" : "none"}` }}
          >
            <ul>
              <li>
                <Link to="/" style={{ color: "#fff" }}>
                  HOME
                </Link>
              </li>

              <li>
                <Link to="advertise" style={{ color: "#fff" }}>
                  ADVERTISE
                </Link>
              </li>

              <li>
                <Link to="about" style={{ color: "#fff" }}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="contact" style={{ color: "#fff" }}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          <div className="header_list_2">
            <ul>
              <li>
                <Link to="/" style={{ color: "#fff" }}>
                  HOME
                </Link>
              </li>

              <li>
                <Link to="advertise" style={{ color: "#fff" }}>
                  ADVERTISE
                </Link>
              </li>

              <li>
                <Link to="about" style={{ color: "#fff" }}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="contact" style={{ color: "#fff" }}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          <div className="toggle">
            <span onClick={() => setModalShow(true)}>Login or Register</span>
            <Auth isLogin show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          {/* <h1 style={{ display: `${showProps ? "initial" : "none"}` }}>
            {props.myName}
          </h1> */}

          <div
            className="left_side_bar_list"
            style={{
              display: `${showLeftSideList ? "initial" : "none"}`,
              color: "#fff",
            }}
          >
            <ul>
              <li>
                <AiFillQuestionCircle color="#56af3e" />

                <a href="#">
                  <Link to="questions" style={{ color: "#fff" }}>
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
        </div>
      </div>

      <div style={{ display: `${showRightBanner ? "initial" : "none"}` }}>
        <img
          src={right_aside}
          alt="rightsidebarimage"
          width="220"
          height="606"
          style={{ padding: "20px 0 0 5px" }}
        />
      </div>
    </>
  );
};
