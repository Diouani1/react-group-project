import { createContext, useEffect, useReducer } from "react";

export const LanguageData = createContext(null);

const LanguageContext = ({ children }) => {
  const reducer = (prev, action) => {
    return { ...prev, ...action };
  };
  const initialState = {
    firstLanguage: "",
    firstLanguageLevel: "",
    secondLanguage: "",
    secondLanguageLevel: "",
    thirdLanguage: "",
    thirdLanguageLevel: "",
  };

  const [language, setlanguage] = useReducer(reducer, initialState);

  return (
    <LanguageData.Provider value={{ language, setlanguage }}>
      {children}
    </LanguageData.Provider>
  );
};

export default LanguageContext;
