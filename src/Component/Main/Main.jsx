import { Route, Routes } from "react-router-dom";
import CV from "../CV/CV";
import HeadingPage from "../HeadingPage/HeadingPage";
import MainHeader from "../MainHeader/MainHeader";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
const Main = () => {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HeadingPage />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="cv" element={<CV />} />
        <Route path="*" element={<HeadingPage />} />

      </Routes>
    </div>
  );
};

export default Main;
