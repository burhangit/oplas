import "./questionsByLevel.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function QuestionsByLevel() {
  const navigate = useNavigate();

  function handleSubjects(e) {
    navigate("level", { state: e.target.innerText });
  }

  return (
    <div className="ques_by_level_main_container">
      <div className="ques_by_level_topbar">
        <h2>Questions By Level</h2>
        <div className="ques_by_level_searchbar">
          <input type="search" placeholder="search at blog" />
          <SearchIcon id="ques_by_level_search_icon" />
        </div>
      </div>

      <div className="ques_by_level_buttons">
        <div className="button_collections">
          <button onClick={handleSubjects}>Biology</button>
          <button onClick={handleSubjects}>Chemistry</button>
          <button onClick={handleSubjects}>Communication Skills</button>
          <button onClick={handleSubjects}>Computer</button>
          <button onClick={handleSubjects}>Economics</button>
          <button onClick={handleSubjects}>English</button>
          <button onClick={handleSubjects}>Environment</button>
          <button onClick={handleSubjects}>Art & Design</button>
          <button onClick={handleSubjects}>General Study</button>
          <button onClick={handleSubjects}>Geography</button>
          <button onClick={handleSubjects}>Health</button>
          <button onClick={handleSubjects}>History</button>
          <button onClick={handleSubjects}>Kiswahili</button>
          <button onClick={handleSubjects}>Mathematics</button>
          <button onClick={handleSubjects}>Physics</button>
          <button onClick={handleSubjects}>Technology</button>
          <button onClick={handleSubjects}>World History</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionsByLevel;
