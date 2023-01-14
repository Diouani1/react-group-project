import "./cvstyle3.css"
import { DataUeser } from "../../../DataOfUser"
import { useContext } from "react"
import { PersonalDetailsContext } from "../../../context/PersonalDetailsContext";
import ImageFilePreviewer from "../../HeadingPage/UploadPhoto/ImageFilePreviewer"
const CvStyle3 = () => {
  const { details } = useContext(PersonalDetailsContext);
  const {color}=useContext(DataUeser)
  return (
    <div className="cvstyle3" style={{ border:`2px dotted ${color}`}}>
      
      <div className="maincv3">
        <div>
            <span style={{color:color}}>Profile</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis
              quod consequuntur laudantium corrupti quidem nemo corporis assumenda,
              amet esse.
            </p>
        </div>
        <div>
            <span style={{color:color}}>Education</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
              excepturi.
            </p>
        </div>
        <div>
            <span style={{color:color}}>experience</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eligendi!
            </p>
        </div>
        <div>
            <span style={{color:color}}>skills</span>
            <ul>
              <li>Skill</li>
              <li>Skill</li>
              <li>Skill</li>
            </ul>
        </div>
        <div>
            <span style={{color:color}}>Certificate</span>
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
        <div><span style={{color:color}}>Hobboies</span></div>
      </div>
      <div className="sideBar3" style={{backgroundColor:color}}>
        <div className="titlcv3" >
          <ImageFilePreviewer/>
        </div>
        <div>
          <span>{`${details.firstName}  ${details.lastName}`}</span>
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
    </div>
  )
}

export default CvStyle3