import "./midSectionCards.css";
import React from "react";
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { questionGet } from "../redux/answerRedux";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";


export const MidSectionCards = (props) => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const onLCickQuestion =(item)=>{
    axios.post('https://oplas.cyberx-infosystem.us/api/question-view',{
      "questionId":item.id
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    dispatch(questionGet(item))
    navigate('/allanswers')
  }
  return props?.questionData?.questions?.map((item, index) => {
    return (
      <div key={index} className="mid_sec_container">
        <div className="mid_card" onClick={()=>onLCickQuestion(item)} >
          <div className="mid_card_left">
            <h5>{item.name}</h5>
            <p>{item.name}</p>

            <div className="user">
              <FaUserCircle size="30" style={{ cursor: "pointer" }} />
              <small style={{ cursor: "pointer" }}>{item.authorName}</small>
              <button id="user_btn">Default</button>
              <p>
                Asked on{item.created}
                <span style={{ color: "#5bb54b", cursor: "pointer" }}>
                  {" "}
                  {item.category}
                </span>
              </p>
            </div>
          </div>

          <div className="mid_card_right">
            <div className="question_details">
              <div className="ques_range_main_div">
                <div className="ques_range">
                  <span>{item.views}</span>
                  <p>views</p>
                </div>

                <div className="ques_range">
                  <span>{item.answer}</span>
                  <p>answers</p>
                </div>

                <div className="ques_range">
                  <span>{item.votes}</span>
                  <p>votes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
