import "./cvstyle3.css";
import { DataUeser } from "../../../DataOfUser";
import { useContext } from "react";
import { PersonalDetailsContext } from "../../../context/PersonalDetailsContext";
import ImageFilePreviewer from "../../HeadingPage/UploadPhoto/ImageFilePreviewer";
import { WorkHistoryContext } from "../../../context/WorkHistoryContext";
import { PersonalityContext } from "context/PersonalityContext";
import { LanguageData } from "context/LanguageContext";
import { EduSkillContext } from "Component/EduSkillContext/EduSkillContext";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const CvStyle3 = () => {
  const { grade, addSkills } = useContext(EduSkillContext);
  const { language } = useContext(LanguageData);
  const { details } = useContext(PersonalDetailsContext);
  const { color } = useContext(DataUeser);
  const { state } = useContext(WorkHistoryContext);
  const { perso } = useContext(PersonalityContext);

  return (
    <div className="cvstyle3">
      <div className="maincv3">
        <div>
          <span style={{ color: color }}>Education</span>
          <p>
            "I am proud to have graduated from {grade.name}, located in{" "}
            {grade.location}, with a {grade.degree} in {grade.field} . My
            graduation dates were from {grade.start} to {grade.end} . I am
            always open to learn more in my field of study. <br />{" "}
            {grade.textArea} ."
          </p>
        </div>
        <div>
          <span style={{ color: color }}>experience</span>
          <p>
            "I had a great experience working as a {state.jobTitle} at{" "}
            {state.employer} in {state.city} , {state.country} from{" "}
            {state.startDate} to {state.endDate} . I am highly adaptable and
            able to quickly learn and implement new skills and tasks. I am a
            fast learner who is always willing to put in the hard work to
            achieve success."
          </p>
        </div>
        <div>
          <span style={{ color: color }}>Profile</span>
          <h5>I am {details.profession}</h5>
          <h6>Here something about my personality</h6>
          <ul>
            <li>Resilient : {perso.resilient}</li>
            <li>Sociable : {perso.sociable}</li>
            <li>Creative : {perso.creative}</li>
            <li>Adaptable : {perso.adaptable}</li>
            <li>Empathetic : {perso.empathetic}</li>
            <li>Ambitious : {perso.ambitious}</li>
          </ul>
        </div>
        {/* <div>
          <span style={{ color: color }}>Certificate</span>
          <ul>
            <li>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="sideBar3" style={{ backgroundColor: color }}>
        <div className="titlcv3">
          <ImageFilePreviewer />
        </div>
        <div>
          <span>{`${details.firstName}  ${details.lastName}`}</span>
          <h6>Contact Information</h6>

          <div className="div">
            <div className="row1">
              <FaPhoneVolume className="col1" color="white" />
              <span className="col1">{details.phone}</span>
            </div>
            <div className="row1">
              <MdAlternateEmail className="col1" color="white" />
              <span className="col1">{details.email}</span>
            </div>
            <div className="row1">
              <MdLocationOn className="col1" color="white" />
              <div>
                <span className="col1">{details.postalCode}</span>{" "}
                <span className="col1">{details.city}</span>
                <br />
                <span className="col1">{details.country}</span>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div>
          <span>Language</span>

          <div className="div">
            <div className="row1">
              <span className="col1">{language.firstLanguage}</span>
              <span className="col1">{language.firstLanguageLevel}</span>
            </div>
            <div className="row1">
              <span className="col1">{language.secondLanguage}</span>
              <span className="col1">{language.secondLanguageLevel}</span>
            </div>{" "}
            <div className="row1">
              <span className="col1">{language.thirdLanguage}</span>
              <span className="col1">{language.thirdLanguageLevel}</span>
            </div>
          </div>
        </div>
        <div>
          <span>Skills</span>
          <ul>
            {addSkills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CvStyle3;
