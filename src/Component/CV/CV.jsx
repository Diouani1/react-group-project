import "./cv.css";
import React, { useContext } from "react";
import { PersonalDetailsContext } from "../../context/PersonalDetailsContext";
const CV = () => {
  const { details } = useContext(PersonalDetailsContext);
  return (
    <div className="cv">
      <div className="sideBar">
        <div className="titlcv">
          <img src="" alt="" />
        </div>
        <div>
          <span> Full name</span>
          <ul>
            <li>addresse</li>
            <li>addresse</li>
            <li>addresse</li>
            <li>addresse</li>
            <li>addresse</li>
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
          <span>Software Skill</span>
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
      <div className="maincv">
        <div>
            <span>Profile</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis
              quod consequuntur laudantium corrupti quidem nemo corporis assumenda,
              amet esse.
            </p>
        </div>
        <div>
            <span>Education</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
              excepturi.
            </p>
        </div>
        <div>
            <span>experience</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eligendi!
            </p>
        </div>
        <div>
            <span>skills</span>
            <ul>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
            </ul>
        </div>
        <div>
            <span>Certificate</span>
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
        <div><span>Hobboies</span></div>
      </div>
    </div>
  );
};

export default CV;
