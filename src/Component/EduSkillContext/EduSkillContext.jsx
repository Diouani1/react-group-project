import { createContext, useState, useReducer } from "react";

export const EduSkillContext = createContext();

export default function EduSkillProvider({ children }) {
  const edu = [
    "High school Diploma",
    "GED",
    "Bachelor of Arts",
    "Associate of Arts",
    "Associate of Science",
    "Associate of Applied Science",
    "Bachelor of Science",
    "BBA",
    "MBA",
    "Master of Science",
    "J.D",
    "M.D",
    "Ph.D",
    "Enter a different degree",
    "No Degree",
  ];
  const efo = {
    name: "School name",
    location: "School Location",
    degree: "Degree",
    enter: "Enter a different degree",
    field: "Field of Study",
    start: "Graduation Start Date",
    end: "Graduation End Date",
    textArea: "",
  };

  const lis = [
    "Good Telephone Etiquette",
    "Critical Thinking",
    "Dependable and Responsible",
    "Clerical Support",
    "Self-Motivated",
    "Written Communication",
    "Interpersonal Communication",
    "MS Office",
    "Training and Development",
    "Multitasking Abilities",
    "Google Workspace",
    "Flexible and Adaptable",
    "Teambuilding",
    "Planning and Coordination",
    "First Aid/CPR",
    "Active Listening",
    "G-Suite",
    "Data Entry",
    "Teamwork and Collaboration",
    "Attention to Detail",
  ];

  const liButton = { add: "ADD", checked: "✔", deleted: "✘" };
  const [buttons, setButtons] = useState(liButton.add);

  const [education, setEducation] = useState("");
  const initialState = {
    // schoolName: "",
    // schoolLocation: "",
    // Degree: "",
    // enterDifferentDegree: "",
    // fieldOfStudy: "",
    // graduationStartDate: "",
    // graduationEndDate: "",
    ...efo,
  };

  // const initialStateSkills = {
  //   schoolName: "",
  //   schoolLocation: "",
  //   Degree: "",
  //   enterDifferentDegree: "",
  //   fieldOfStudy: "",
  //   graduationStartDate: "",
  //   graduationEndDate: "",
  // };

  const reducer = (preState, action) => {
    return {
      ...preState,
      ...action,
    };
  };

  const [grade, dispatch] = useReducer(reducer, initialState);
  // const [stateSkills, dispatchSkills] = useReducer(reducer, initialStateSkills);

  return (
    <EduSkillContext.Provider
      value={{
        edu,
        efo,
        lis,
        liButton,
        education,
        setEducation,
        buttons,
        setButtons,
        grade,
        dispatch,
      }}
    >
      {children}
    </EduSkillContext.Provider>
  );
}
