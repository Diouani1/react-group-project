import "./cvstyle1.css";
import { DataUeser } from "../../../DataOfUser";
import { useContext } from "react";
import { PersonalDetailsContext } from "../../../context/PersonalDetailsContext";
import { WorkHistoryContext } from "../../../context/WorkHistoryContext";
import ImageFilePreviewer from "../../HeadingPage/UploadPhoto/ImageFilePreviewer";
const CvStyle1 = () => {
  const { details} = useContext(
    PersonalDetailsContext
  );
  const { color } = useContext(DataUeser);
  const { state } = useContext(WorkHistoryContext);
  return (
        <div className="cvstyle1" style={{ border: `2px dotted ${color}` }}>
          <div className="sideBar1" style={{ backgroundColor: color }}>
            <div className="titlcv1">
              <ImageFilePreviewer />
            </div>
            <div>
              <span>{`${details.firstName}  ${details.lastName}`}</span>
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
              <span>Language</span>
              <ul>
                <li>German</li>
                <li>German</li>
                <li>German</li>
              </ul>
            </div>
            <div>
              <span>Skills</span>
              <ul>
                <li>word</li>
                <li>word</li>
                <li>word</li>
                <li>word</li>
              </ul>
            </div>
            <div>
              <span>Personality</span>
              <ul>
                <li>organized</li>
                <li>organized</li>
                <li>organized</li>
              </ul>
            </div>
          </div>
          <div className="maincv1">
            <div>
              <span style={{ color: color }}>Profile</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                facilis quod consequuntur laudantium corrupti quidem nemo
                corporis assumenda, amet esse.
              </p>
            </div>
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
                {state.endDate}. I am highly adaptable and able to quickly learn
                and implement new skills and tasks. I am a fast learner who is
                always willing to put in the hard work to achieve success."
              </p>
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
            <div>
              <span style={{ color: color }}>Hobboies</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, adipisci?
              </p>
            </div>
          </div>
        </div>
  );
};

export default CvStyle1;
