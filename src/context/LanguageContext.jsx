import { createContext, useEffect, useReducer } from "react";

export const LanguageData = createContext(null);

const LanguageContext = ({ children }) => {
  const reducer = (prev, action) => {
    return { ...prev, ...action };
  };
  const initialState = {
    firstLanguage: "",
    firstLanguageLevel: "",
    SecondLanguage: "",
    secondLanguageLevel: "",
    thirdLanguage: "",
    thirdLanguageLevel: "",
  };

  const [language, setlanguage] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <LanguageData.Provider value={{ language, setlanguage }}>
      {children}
    </LanguageData.Provider>
  );
};

export default LanguageContext;
