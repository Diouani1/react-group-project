import { createContext, useEffect, useReducer } from "react";

export const PersonalDetailsContext = createContext(null);

const PersonalDetailsContextProvider = ({ children }) => {
  const reducer = (details, action) => {
    return { ...details, ...action };
  };

  const initialState = {
    firstName: "",
    lastName: "",
    profession: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
    email: "",
  };
  const [details, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <PersonalDetailsContext.Provider value={{ details, dispatch }}>
      {children}
    </PersonalDetailsContext.Provider>
  );
};

export default PersonalDetailsContextProvider;
