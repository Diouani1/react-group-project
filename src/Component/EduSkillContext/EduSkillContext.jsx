import { createContext, useState, useReducer, useEffect } from "react";

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
    name: "",
    location: "",
    degree: "",
    enter: "",
    field: "",
    start: "",
    end: "",
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

  const [deleteButton, setDeleteButton] = useState();

  const liButton = { add: "ADD", checked: "✔", deleted: "✘" };
  const [buttons, setButtons] = useState(liButton.add);

  const [education, setEducation] = useState("");
  const initialState = {
    ...efo,
  };
  const [valueIn, setValueIn] = useState("");

  const [addSkills, setAddSkills] = useState([]);

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
        // stateSkills,
        // dispatchSkills,
        deleteButton,
        setDeleteButton,
        addSkills,
        setAddSkills,
        valueIn,
        setValueIn,
      }}
    >
      {children}
    </EduSkillContext.Provider>
  );
}
