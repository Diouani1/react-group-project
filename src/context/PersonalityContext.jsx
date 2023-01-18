import { createContext, useEffect, useReducer } from "react";

export const PersonalityContext = createContext(null);

const PersonalityContextProvider = ({ children }) => {
  const reducer = (prev, action) => {
    return { ...prev, ...action };
  };
  const initialState = {
    resilient: "",
    sociable: "",
    creative: "",
    adaptable: "",
    empathetic: "",
    ambitious: "",
  };

  const [perso, setPerso] = useReducer(reducer, initialState);

  return (
    <PersonalityContext.Provider value={{ perso, setPerso }}>
      {children}
    </PersonalityContext.Provider>
  );
};

export default PersonalityContextProvider;
