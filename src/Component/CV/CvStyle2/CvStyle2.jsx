import "./cvstyle2.css";
import { DataUeser } from "../../../DataOfUser";
import { useContext } from "react";
import { PersonalDetailsContext } from "../../../context/PersonalDetailsContext";
import ImageFilePreviewer from "../../HeadingPage/UploadPhoto/ImageFilePreviewer";
import { WorkHistoryContext } from "../../../context/WorkHistoryContext";
import { PersonalityContext } from "context/PersonalityContext";
import { LanguageData } from "context/LanguageContext";

const CvStyle2 = () => {
  const { language } = useContext(LanguageData);
  const { details } = useContext(PersonalDetailsContext);
  const { color } = useContext(DataUeser);
  const { state } = useContext(WorkHistoryContext);
  const { perso } = useContext(PersonalityContext);

  return (
    <div className="cvstyle2">
      <div className="sideBar2">
        <div className="titlcv2" style={{ backgroundColor: color }}>
          <ImageFilePreviewer
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
        <div style={{ marginLeft: "0.5rem" }}>
          <span
            style={{ color: color }}
          >{`${details.firstName}  ${details.lastName}`}</span>
          <h6>Contact Information</h6>

          <ul>
            <li>{details.phone}</li>
            <li>{details.email}</li>
            <li>{details.city}</li>
            <li>{details.postalCode}</li>
            <li>{details.country}</li>
          </ul>
        </div>
        <div>
          <span style={{ color: color }}>Language</span>
          <div className="language">
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
        <div style={{ marginRight: "0.5rem" }}>
          <span style={{ color: color }}>Skill</span>
          <ul>
            <li>word</li>
            <li>word</li>
            <li>word</li>
            <li>word</li>
          </ul>
        </div>
      </div>
      <div
        className="maincv2"
        style={{
          borderTop: `1px solid  ${color}`,
        }}
      >
        <div>
          <span style={{ color: color }}>Education</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
            excepturi.
          </p>
        </div>
        <div>
          <span style={{ color: color }}>experience</span>
          <p>
            "I had a great experience working as a {state.jobTitle} at{" "}
            {state.employer}
            in {state.city}, {state.country} from {state.startDate} to
            {state.endDate}. I am highly adaptable and able to quickly learn and
            implement new skills and tasks. I am a fast learner who is always
            willing to put in the hard work to achieve success."
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
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default CvStyle2;
