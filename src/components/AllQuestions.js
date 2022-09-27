import "./allQuestions.css";
import React, { useEffect } from "react";
import { MidSectionCards } from "./MidSectionCards";
import { useLocation } from "react-router-dom";
import axios from "axios";
const AllQuestions = (props) => {
  const location = useLocation();
  const name = "rahul";
  useEffect(async () => {
    await axios
      .post("https://oplas.cyberx-infosystem.us/api/questions", {
        categoryId: "0",
        offset: "0",
        type: "unanswered",
      })
      .then((response) => {
        console.log("data:", response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="all_que_topbar">
        <h5>
          All Questions
          {/* <button onClick={props.test}>click test</button> */}
          {location.state
            ? `${location.state.subjectName},${location.state.level}`
            : ""}
        </h5>
        <div className="dropdowns">
          <form action="/action_page.php" id="all_que_form">
            <label id="label1" for="cars">
              Filter by
            </label>
            <select name="cars" id="dropdown1">
              <option value="volvo">Select Categories</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <select name="cars" id="dropdown2">
              <option value="volvo">All</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </form>
        </div>
      </div>

      {/* mid section navbar */}
      <div className="mid_container_nav">
        <div id="mid_nav">
          <div className="left_nav">
            <ul>
              <li>
                <a className="active">Latest</a>
              </li>
              <li>
                <a>Votes</a>
              </li>
              <li>
                <a>Unasnswered</a>
              </li>
            </ul>
          </div>

          <div className="right_nav">
            <form action="/action_page.php">
              <label id="right_nav_label" for="cars">
                Questions Per Page:
              </label>
              <select name="cars" id="nav_dropdown">
                <option value="volvo">8</option>
                <option value="saab">2</option>
                <option value="opel">23</option>
                <option value="audi">11</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <MidSectionCards />
      <MidSectionCards />
      <MidSectionCards />
      <MidSectionCards />
      <MidSectionCards />
      <MidSectionCards />
    </div>
  );
};

export default AllQuestions;
