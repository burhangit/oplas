import "./midSectionCards.css";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

export const MidSectionCards = () => {
  return (
    <div className="mid_sec_container">
      <div className="mid_card">
        <div className="mid_card_left">
          <h5>
            What are the advantages and disadvantages of age set organization
          </h5>
          <p>
            What are the advantages and disadvantages of age set organization
          </p>

          <div className="user">
            <FaUserCircle size="30" style={{ cursor: "pointer" }} />
            <small style={{ cursor: "pointer" }}>Burhan</small>
            <button id="user_btn">Default</button>
            <p>
              Asked on June 15, 2022 in
              <span style={{ color: "#5bb54b", cursor: "pointer" }}>
                {" "}
                History.
              </span>
            </p>
          </div>
        </div>

        <div className="mid_card_right">
          <div className="question_details">
            <div className="ques_range_main_div">
              <div className="ques_range">
                <span>39</span>
                <p>views</p>
              </div>

              <div className="ques_range">
                <span>39</span>
                <p>views</p>
              </div>

              <div className="ques_range">
                <span>39</span>
                <p>views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
