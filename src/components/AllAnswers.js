import React from "react";
import "./allAnswers.css";
import {
  BiChevronUpCircle,
  BiChevronDownCircle,
  BiUpArrowAlt,
} from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import {
  AiFillDelete,
  AiFillMinusSquare,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { FaUserCircle, FaComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

function AllAnswers() {
  return (
    <div className="all_answers_main_container">
      <div className="all_answers_topbar">
        <span>&laquo; Home</span>
        <h1>
          What are the Problems Facing the Process of Power and
          <br /> Energy Harnessing?
        </h1>
      </div>
      <hr />

      {/******* question display section  ********/}

      <div className="ques_display_section">
        <div className="ques_display_left_section">
          <ul>
            <li>
              <BiChevronUpCircle size="25" color="#c8c9ca" />
            </li>
            <li>
              <small
                style={{
                  borderRadius: "3px",
                  color: "#fff",
                  padding: "5px 20px 5px 20px",
                  backgroundColor: "#e65c23",
                }}
              >
                0
              </small>
            </li>
            <li>
              <BiChevronDownCircle size="25" color="#c8c9ca" />
            </li>
            <li>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  backgroundColor: "#e65c23",
                  color: "#fff",
                  padding: "0 10px 0 10px",
                }}
              >
                <BiUpArrowAlt />
                Pump
              </button>
            </li>
          </ul>
        </div>

        <div className="ques_display_right_section">
          <div className="ques_crud_opr_icons">
            <GrEdit style={{ marginRight: "10px" }} />
            <AiFillDelete style={{ marginRight: "10px" }} />
            <AiFillMinusSquare style={{ marginRight: "10px" }} />
            <BsFillExclamationTriangleFill style={{ marginRight: "10px" }} />
          </div>

          <div className="ques_desc">
            <p>
              Let us together the Problems Facing the Process of Power and
              Energy Harnessing
            </p>
            <hr />
          </div>

          <div className="ques_asked_by">
            <div className="ques_asked_by_left">
              <FaUserCircle size="30" style={{ cursor: "pointer" }} />
              <small style={{ paddingRight: "10px" }}>Administrator</small>
              <small
                style={{
                  backgroundColor: "#9e2800",
                  padding: "0 10px 0 10px",
                  color: "#fff",
                  borderRadius: "3px",
                }}
              >
                premier
              </small>
              <small>Asked on March 21, 2022 in</small>
            </div>

            <div className="ques_asked_by_right">
              <small>Share</small>
              <IoMdShareAlt style={{ paddingLeft: "5px" }} size="25" />
              <small>
                Comments(0)
                <FaComment style={{ paddingLeft: "5px" }} size="20" />
              </small>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="all_answers_nav">
        <div className="all_answers_left_nav">
          <big>1 Answer(s)</big>
        </div>
        <div className="all_answers_rigth_nav">
          <p>Votes</p>
          <p>oldest</p>
        </div>
      </div>

      <div className="answer_explained_header">
        <div className="answer_display_left_section">
          <ul>
            <li>
              <BiChevronUpCircle size="25" color="#c8c9ca" />
            </li>
            <li>
              <small
                style={{
                  borderRadius: "3px",
                  color: "#fff",
                  padding: "5px 20px 5px 20px",
                  backgroundColor: "#e65c23",
                }}
              >
                0
              </small>
            </li>
            <li>
              <BiChevronDownCircle size="25" color="#c8c9ca" />
            </li>
            <li>
              <AiOutlineCheckCircle size="25" color="#c8c9ca" />
            </li>
          </ul>
        </div>
        <div className="ques_display_right_section1">
          <GrEdit style={{ marginLeft: "10px" }} />
          <AiFillDelete style={{ marginLeft: "10px" }} />
          <AiFillMinusSquare style={{ marginLeft: "10px" }} />
          <BsFillExclamationTriangleFill style={{ marginLeft: "10px" }} />
        </div>
      </div>

      <div className="answer_describe">
        <p>
          Power and energy production endeavor is faced by a number of problems
          which include the following: 1.Changing climatic conditions: Drought
          leads to rainfall scarcity and hence a drop in the volume of water in
          rivers. This problem affects the production of hydroelectric power and
          is one of the factors leading to low energy production in most parts
          of the world, especially in the least developed countries. 2.Lack of
          capital: Energy and power production needs heavy investments in
          infrastructure, manpower and technology. All these investments require
          a great deal of capital. 3.Lack of diverse energy sources in
          respective countries: Most counties have very few energy resources
          from which to extract power and energy. Worse still, some do not have
          a single energy resource, so they have to import the resources or
          power. For instance, uranium and geothermal steam are not found in
          many countries. Such countries extract power from only a few available
          resources such as water, wind or solar energy. 4.Poor technology and
          lack of skilled personnel: Many developing countries lack the
          technology required to establish energy extraction infrastructures and
          the skilled personnel needed to perform that function. Most of the
          power and energy exploitation technology used in developing countries
          is very old and less efficient and productive. There are also very few
          people with the necessary skills for setting up and operating
          equipment as well as conducting research on power and energy
          production methods, facilities and technologies. 5.High prices: High
          prices for energy resources hinder energy and power output in most
          countries that have to import these resources from other countries.
          Oil is used for energy production. We have recently seen escalating
          oil prices worldwide. This leads to low purchase and hence low energy
          and power production. Also the equipment needed for production of
          energy and power is very expensive and can thus not be afforded by
          many poor countries. As a result, they resort to inefficient and less
          productive obsolete technology which cannot produce sufficient power
          and energy to meet the ever-increasing demand for energy and power.
          6.Environment pollution: Energy and power exploitation is sometimes
          accompanied with the emission of harmful gases that pollute the
          environment. Coal burning, for example, releases tremendous quantities
          of carbon dioxide gas into the atmosphere. As such, many countries are
          either phasing out such energy generation technologies or spending a
          lot of capital to clean the coal so as to prevent environmental
          pollution. The power and energy production sector is, therefore, in
          great pressure to adopt technologies that minimize or cause no
          environmental pollution. 7.Siltation: Accumulation of silt in dams
          used for generation of hydroelectric power reduces the volume of water
          in dams, hence resulting to low power generation. On the other hand,
          removal of the silt from dams adds to the cost of energy and power
          production and these costs are pushed on to consumers of energy and
          power.
        </p>
      </div>

      <div className="ques_asked_by">
        <div className="ques_asked_by_left">
          <FaUserCircle size="30" style={{ cursor: "pointer" }} />
          <small>Administrator</small>
          <small>premier</small>
          <small>Asked on March 21, 2022 in</small>
        </div>
        <div className="ques_asked_by_right">
          <small>Share</small>
          <IoMdShareAlt style={{ paddingLeft: "5px" }} size="25" />
          <small>
            Comments(0)
            <FaComment style={{ paddingLeft: "5px" }} size="25" />
          </small>
        </div>
      </div>
      <hr />

      <div className="post_ques_solution">
        <h5 className="post_ques_solution_title">Your Answer</h5>
        <form action="">
          <textarea
            name="post_solution"
            id="post_solution"
            cols="100"
            rows="15"
            style={{ border: "1px solid #c8c9ca;" }}
          ></textarea>
          <br />
          <button>Post answer</button>
        </form>
        <p>
          By posting your answer, you agree to the{" "}
          <span style={{ color: "#76b264" }}>privacy policy</span> and{" "}
          <span style={{ color: "#76b264" }}>terms of service.</span>
        </p>
      </div>
    </div>
  );
}

export default AllAnswers;
