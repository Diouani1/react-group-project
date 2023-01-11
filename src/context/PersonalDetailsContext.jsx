import { createContext, useState } from "react";

export const PersonalDetailsContext=createContext(null)

const PersonalDetailsContextProvider=({children})=>{

    

return(
    <PersonalDetailsContext.Provider>
        {children}
    </PersonalDetailsContext.Provider>
)
}

export default PersonalDetailsContextProvider;

