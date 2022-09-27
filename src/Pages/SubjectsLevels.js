import "./subjectsLevels.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";

function SubjectsLevels() {
  const location = useLocation();
  //location.state -> subject name
  const navigate = useNavigate();
  const handleLevels = (e) => {
    navigate("allquestions", {
      state: { subjectName: location.state, level: e.target.innerText },
    });
  };
  return (
    <div className="sub_levels_main_container">
      <div className="sub_levels_topbar">
        <h2>{location.state}</h2>
        <div className="sub_levels_searchbar">
          <input type="search" placeholder="Search at blog" />
          <SearchIcon id="sub_levels_search_icon" />
        </div>
      </div>

      <div className="sub_levels_btns">
        <div className="sub_levels_btns_row1">
          <button onClick={handleLevels}>level - 1</button>
          <button onClick={handleLevels}>level - 2</button>
          <button onClick={handleLevels}>level - 3</button>
        </div>

        <div className="sub_levels_btns_row2">
          <button onClick={handleLevels}>level - 4</button>
          <button onClick={handleLevels}>level - 5</button>
          <button onClick={handleLevels}>level - 6</button>
        </div>
      </div>
    </div>
  );
}

export default SubjectsLevels;
