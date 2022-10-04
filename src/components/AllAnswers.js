import React,{useEffect, useState} from "react";
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
import { useSelector } from "react-redux";
import axios from "axios";

function AllAnswers() {
  const [answer, setAnswer] = useState()
  const question = useSelector((state)=>state.answer.questionData)
  
  
  useEffect(() => {
    axios
      .post(
        "https://oplas.cyberx-infosystem.us/api/question-info",
        {
          "questionId": question.id,
        },)
      .then((response) => {
        setAnswer(response.data.data);
      }).catch((err)=>{
        console.log(err)
      })
  }, []);
  
  console.log(answer,'answer')
  
  return (
    <div className="all_answers_main_container">
      <div className="all_answers_topbar">
        <span>&laquo; Home</span>
        <h1>
          {answer?.question?.name}
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
            {answer?.question?.name}
            </p>
            <hr />
          </div>

          <div className="ques_asked_by">
            <div className="ques_asked_by_left">
              <FaUserCircle size="30" style={{ cursor: "pointer" }} />
              <small style={{ paddingRight: "10px" }}>{answer?.question?.authorName}</small>
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
              <small>Asked on {answer?.question?.created}</small>
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
          <big>Answers {answer?.question?.answer}</big>
        </div>
        <div className="all_answers_rigth_nav">
          <p>Votes({answer?.question?.votes})</p>
          <p>oldest</p>
        </div>
      </div>

      {answer?.question?.answersList?.map((item,index)=>{
        return <div style={{display:'flex'}}>
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
     <p> {item.description}</p>
      </div>

      <div className="ques_asked_by">
        <div className="ques_asked_by_left">
          <FaUserCircle size="30" style={{ cursor: "pointer" }} />
          <small>{item.authorName}</small>
          <small>premier</small>
          <small>Asked on {item.created}</small>
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
        </div>
      })}

      
    
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
