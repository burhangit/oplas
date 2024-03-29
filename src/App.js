import "./app.css";
import { Header } from "./components/Header.js";
import { RightSideBar } from "./components/RightSideBar.js";
import { LeftSideBar } from "./components/LeftSideBar.js";
import { Footer } from "./components/Footer.js";
import AllQuestions from "./components/AllQuestions";
import AboutUs from "./Pages/AboutUs.js";
import Home from "./Pages/Home";
import Advertise from "./Pages/Advertise";
import ContactUs from "./Pages/ContactUs";
import Categories from "./Pages/Categories";
import QuestionsByLevel from "./Pages/QuestionsByLevel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubjectsLevels from "./Pages/SubjectsLevels";
import Level from "./Pages/Level";
// import PostQuestionPopup from "./components/PostQuestionPopup";
import AllAnswers from "./components/AllAnswers";
// import CkEditor from "./components/CkEditor";

function App() {
  return (
    <Router>
      {/* <CkEditor /> */}
      <Header />
      <div className="front">
        <LeftSideBar />
        <div className="mid_sections">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/questions" element={<AllQuestions />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/level" element={<Level />} />
            <Route path="/questionsbylevel" element={<QuestionsByLevel />} />
            <Route
              path="/questionsbylevel/level"
              element={<SubjectsLevels />}
            />
            <Route
              path="/questionsbylevel/level/allquestions"
              element={<AllQuestions />}
            />

            <Route path="/allanswers" element={<AllAnswers />} />
          </Routes>
        </div>
        <RightSideBar />
      </div>
      <Footer />
      {/* <PostQuestionPopup /> */}
    </Router>
  );
}

export default App;
