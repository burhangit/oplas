import "./allQuestions.css";
import React, { useState, useEffect } from "react";
import { MidSectionCards } from "./MidSectionCards";
import { useLocation } from "react-router-dom";
// import Pagination from 'react-bootstrap/Pagination';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from "axios";

const AllQuestions = (props) => {
  const location = useLocation();
  const [page , setPage] = useState(0);
  const [page2 , setPage2] = useState(0);
  const [update, setUpdate] = useState(false)
  const [questionData, setQuestionData] = useState([]);
  const [length, setlength] = useState()
  const [selectTab, setSelectTab] = useState('latest')
  const [category , setCategory] = useState(null)
  const [selectedCategory, setSelectedCategory]= useState('')

  useEffect(() => {
    axios
      .post(
        "https://oplas.cyberx-infosystem.us/api/questions",
        {
          categoryId: "0",
          offset:page2,
          type: "latest",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setlength(response.data.data.totalQuestion)
        setQuestionData(response.data.data);
      });
      
      axios
      .post("https://oplas.cyberx-infosystem.us/api/category",{})
      .then((response) => {
        setCategory(response.data.data);
      }).catch((err)=>console.log(err))
      
  }, [update]);
  

  let lastNumber = Math.ceil(length/10)
  const handleChange =( value) => {
    setPage(value);
    setPage2(page2+10)
    setUpdate(!update)
  };

  const onClickLatest=()=>{
    setSelectTab('latest')
  }
  
  const onClickVotes =()=>{
    setSelectTab('votes')
    axios
    .post(
      "https://oplas.cyberx-infosystem.us/api/questions",
      {
        categoryId: "0",
        offset:page2,
        type: "votes",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      setlength(response.data.data.totalQuestion)
      setQuestionData(response.data.data);
    });
  }
  
  const onClickunanswered =()=>{
    setSelectTab('unanswered')
    axios
    .post(
      "https://oplas.cyberx-infosystem.us/api/questions",
      {
        categoryId: "0",
        offset:page2,
        type: "unanswered",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      setlength(response.data.data.totalQuestion)
      setQuestionData(response.data.data);
    });
  }

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
            <select onChange={(e)=>setSelectedCategory(e.target.value)} name="cars" id="dropdown1">
              <option value="Select">Select Categories</option>
              {category?.map((item,index)=>{
                return <option value={item.name}>{item.name}</option>
              })}
              
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
              <li onClick={onClickLatest} >
                <a className={selectTab==='latest'?'active':''} >Latest</a>
              </li>
              <li onClick={onClickVotes} >
                <a  className={selectTab==='votes'?'active':''}  >Votes</a>
              </li>
              <li onClick={onClickunanswered}>
                <a  className={selectTab==='unanswered'?'active':''}  >Unasnswered</a>
              </li>
            </ul>
          </div>

          
        </div>
      </div>
      <MidSectionCards questionData={questionData} />
      <div className="card_page_number m-4">
      {/* <Pagination>{items}</Pagination> */}
      <Pagination count={lastNumber} page={page} onChange={handleChange} color="primary" />
      </div>
    </div>
  );
};

export default AllQuestions;
