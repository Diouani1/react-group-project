import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CV from "../CV/CV";
import HeadingPage from "../HeadingPage/HeadingPage";
import MainHeader from "../MainHeader/MainHeader";

const Main = () => {
  return (
    <div>
      <MainHeader />
      {/* <CV/> */}
      <Routes>
        <Route path="/" element={<HeadingPage />} />
      </Routes>
    </div>
  );
};

export default Main;
