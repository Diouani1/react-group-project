import { createContext, useState} from "react";

export const EduSkillContext=createContext()

export default function EduSkillProvider({children}){

const edu=["High school Diploma","GED","Bachelor of Arts","Associate of Arts","Associate of Science","Associate of Applied Science","Bachelor of Science","BBA","MBA","Master of Science","J.D","M.D","Ph.D","Enter a different degree","No Degree"]

const efo={name:"School name",
location:"School Location",
degree:"Degree",
enter:"Enter a different degree",
field:"Field of Study",
check:"Check me out",
start:"Graduation Start Date",
end:"Graduation End Date"
}

const lis=["Good Telephone Etiquette","Critical Thinking","Dependable and Responsible","Clerical Support","Self-Motivated","Written Communication","Interpersonal Communication","MS Office","Training and Development","Multitasking Abilities","Google Workspace","Flexible and Adaptable","Teambuilding","Planning and Coordination","First Aid/CPR","Active Listening","G-Suite","Data Entry","Teamwork and Collaboration","Attention to Detail"]

const liButton={add:"ADD",
checked:"✔"

}

const [education,setEducation]=useState("")

    return (
        <EduSkillContext.Provider value={{edu,efo,lis,liButton, education,setEducation}}>
            {children}
        </EduSkillContext.Provider>
    )


}