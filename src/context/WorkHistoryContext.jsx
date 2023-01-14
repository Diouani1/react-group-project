import { createContext, useReducer, useEffect } from "react";

export const WorkHistoryContext = createContext(null);

const WorkHistoryContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    return { ...state, ...action };
  };

  const personalDetails = {
    jobTitle: "",
    employer: "",
    city: "",
    country: "",
    stateDate: "",
    endDate: "",
  };

  const [state, dispatch] = useReducer(reducer, personalDetails);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <WorkHistoryContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkHistoryContext.Provider>
  );
};

export default WorkHistoryContextProvider;
