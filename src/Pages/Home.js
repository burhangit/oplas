import React from "react";
import Banner from "../components/Banner";
import AllQuestions from "../components/AllQuestions";
// import { RightSideBar } from "./../components/RightSideBar";

const Home = () => {
  return (
    <div>
      {/* <RightSideBar /> */}
      <Banner />
      <AllQuestions />
    </div>
  );
};

export default Home;
