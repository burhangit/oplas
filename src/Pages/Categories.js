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
          <div className="categ_B_head_title">
            <TbLetterB size="40" />
          </div>

          <div className="cate_list_b_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
              
            </ul>
          </div>

          <div className="cate_list_b_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
              <li>
                <a href="">Biology Questions Level 7</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*********Category C***********/}
      <div className="categ_by_alphabet">
        <div className="category_C">
          <div className="categ_C_head_title">
            <TbLetterC size="40" />
          </div>

          <div className="cate_list_c_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_c_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_c_row3">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_c_row4">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_c_row5">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/****************** Category E ************/}
      <div className="categ_by_alphabet">
        <div className="category_E">
          <div className="category_E">
            <div className="categ_E_head_title">
              <TbLetterE size="40" />
            </div>

            <div className="cate_list_e_row1">
              <ul>
                <li>
                  <a href="Biology">Biology</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 1</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 2</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 3</a>
                </li>
              </ul>
            </div>

            <div className="cate_list_e_row2">
              <ul>
                <li>
                  <a href="">Biology Questions Level 4</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 5</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 6</a>
                </li>
              </ul>
            </div>

            <div className="cate_list_e_row3">
              <ul>
                <li>
                  <a href="">Biology Questions Level 4</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 5</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 6</a>
                </li>
              </ul>
            </div>

            <div className="cate_list_e_row4">
              <ul>
                <li>
                  <a href="">Biology Questions Level 4</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 5</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 6</a>
                </li>
              </ul>
            </div>

            <div className="cate_list_e_row5">
              <ul>
                <li>
                  <a href="">Biology Questions Level 4</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 5</a>
                </li>
                <li>
                  <a href="">Biology Questions Level 6</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/***************** F ****************/}
      <div className="categ_by_alphabet">
        <div className="category_F">
          <div className="categ_F_head_title">
            <TbLetterF size="40" />
          </div>

          <div className="cate_list_f_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_f_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*************** Category G **************/}
      <div className="categ_by_alphabet">
        <div className="category_G">
          <div className="categ_G_head_title">
            <TbLetterG size="40" />
          </div>

          <div className="cate_list_g_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_g_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/****************** Category H ******************/}
      <div className="categ_by_alphabet">
        <div className="category_H">
          <div className="categ_H_head_title">
            <TbLetterH size="40" />
          </div>

          <div className="cate_list_h_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_h_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*****************Category K ***************/}
      <div className="categ_by_alphabet">
        <div className="category_K">
          <div className="categ_K_head_title">
            <TbLetterK size="40" />
          </div>

          <div className="cate_list_k_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_k_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*****************Category M ***************/}
      <div className="categ_by_alphabet">
        <div className="category_M">
          <div className="categ_M_head_title">
            <TbLetterM size="40" />
          </div>

          <div className="cate_list_m_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_m_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*****************Category P ***************/}
      <div className="categ_by_alphabet">
        <div className="category_P">
          <div className="categ_P_head_title">
            <TbLetterP size="40" />
          </div>

          <div className="cate_list_p_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_p_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*****************Category T ***************/}
      <div className="categ_by_alphabet">
        <div className="category_T">
          <div className="categ_T_head_title">
            <TbLetterT size="40" />
          </div>

          <div className="cate_list_t_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_t_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*****************Category W ***************/}
      <div className="categ_by_alphabet">
        <div className="category_W">
          <div className="categ_W_head_title">
            <TbLetterW size="40" />
          </div>

          <div className="cate_list_w_row1">
            <ul>
              <li>
                <a href="Biology">Biology</a>
              </li>
              <li>
                <a href="">Biology Questions Level 1</a>
              </li>
              <li>
                <a href="">Biology Questions Level 2</a>
              </li>
              <li>
                <a href="">Biology Questions Level 3</a>
              </li>
            </ul>
          </div>

          <div className="cate_list_w_row2">
            <ul>
              <li>
                <a href="">Biology Questions Level 4</a>
              </li>
              <li>
                <a href="">Biology Questions Level 5</a>
              </li>
              <li>
                <a href="">Biology Questions Level 6</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
