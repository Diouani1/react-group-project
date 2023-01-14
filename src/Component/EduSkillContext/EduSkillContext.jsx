import { createContext} from "react";

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




    return (
        <EduSkillContext.Provider value={{edu,efo}}>
            {children}
        </EduSkillContext.Provider>
    )


}