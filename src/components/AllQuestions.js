import "./allQuestions.css";
import React, { useState, useEffect } from "react";
import { MidSectionCards } from "./MidSectionCards";
import { useLocation } from "react-router-dom";
import axios from "axios";

const AllQuestions = (props) => {
  const location = useLocation();
  const [array] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://oplas.cyberx-infosystem.us/api/questions",
        {
          categoryId: "0",
          offset: "0",
          type: "unanswered",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // console.log("data:", response.data);
        setQuestionData(response.data.data);
      });
  }, []);
  console.log(questionData, "questionData");

  return (
    <div className="container">
      <div className="all_que_topbar">
        <h5>
          All Questions
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
      {/************** mid section navbar *************/}
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
      <MidSectionCards questionData={questionData} />
      <div className="card_page_number">
        <ul class="page-numbers">
          <li>1</li>
          <li>
            <a>2</a>
          </li>

          <li class="page-numbers dots">…</li>
          <li>89 </li>
          <li>&gt;</li>
        </ul>
      </div>
    </div>
  );
};

export default AllQuestions;
