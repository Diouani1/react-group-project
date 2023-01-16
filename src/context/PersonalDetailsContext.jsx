import { createContext, useEffect, useReducer } from "react";

export const PersonalDetailsContext = createContext(null);

const PersonalDetailsContextProvider = ({ children }) => {

  
  const reducer = (details, action) => {
    return { ...details, ...action };
  };

  const initialState = {
    firstName: "FirstName",
    lastName: "LastName",
    profession: "Profession",
    city: "City",
    postalCode: "1111111",
    country: "Country",
    phone: "04900000000000",
    email: "email@gmail.com",
  };
  const [details, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <PersonalDetailsContext.Provider value={{ details, dispatch}}>
      {children}
    </PersonalDetailsContext.Provider>
  );
};

export default PersonalDetailsContextProvider;
