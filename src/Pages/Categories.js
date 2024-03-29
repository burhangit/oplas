import React,{useState, useEffect} from "react";
import "./categories.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios'

import {
  TbLetterB,
  TbLetterC,
  TbLetterE,
  TbLetterF,
  TbLetterG,
  TbLetterH,
  TbLetterK,
  TbLetterM,
  TbLetterP,
  TbLetterT,
  TbLetterW,
} from "react-icons/tb";

function Categories() {
  const [category , setCategory] = useState(null)
  
  useEffect(()=>{
    axios
    .post("https://oplas.cyberx-infosystem.us/api/category",{})
    .then((response) => {
      setCategory(response.data.data);
    }).catch((err)=>console.log(err))
  },[])
  
  console.log(category,'category')
  return (
    <div className="categories_main_container">
      <div className="categories_topbar">
        <h2>Categories</h2>
        <div className="categories_searchbar">
          <input type="search" placeholder="Find Categories" />
          <SearchIcon id="categories_search_icon" />
        </div>
      </div>

      {/******* categories navbar **********/}
      <div className="categories_navbar">
        <ul>
          <li>
            <a className="active">Name</a>
          </li>
          <li>
            <a>Popular</a>
          </li>
        </ul>
      </div>

      {/********* category B  ********/}
      <div className="categ_by_alphabet">
        <div className="category_B">
        

            <div className="container">
              <div className="row">
                {category?.map((item,index)=>{
                  return <div key={index} className="col-md-2 p-2 ">
                  <div className="cat-list" >
                    <a href="">{item.name}</a>
                        </div>
                    </div>
                })}
                
              
              </div>
              
            {/* <ul>
              <li className="cat-list" >
                <a href="Biology">Biology</a>
              </li>
              <li className="cat-list" >
                <a href="">Biology Questions Level 1</a>
              </li>
              <li className="cat-list" >
                <a href="">Biology Questions Level 2</a>
              </li>
              <li className="cat-list" >
                <a href="">Biology Questions Level 3</a>
              </li>
              <li className="cat-list" >
                <a href="Biology">Biology</a>
              </li>
              <li className="cat-list" >
                <a href="">Biology Questions Level 1</a>
              </li>
              <li className="cat-list" >
                <a href="">Biology Questions Level 2</a>
              </li>
              <li className="cat-list" >
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul> */}
          </div>

        </div>
      </div>

      {/*********Category C***********/}

    </div>
  );
}

export default Categories;
