import React, { createContext, useEffect, useReducer, useRef, useState } from "react";
export const DataUeser = createContext();
const nameOfUser = JSON.parse(localStorage.getItem("user"));



const DataOfUser = ({ children }) => {
  const [userName, setUserName] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState(nameOfUser);
  const [modeType, setModeType] = useState("signup");
  const [error, setError] = useState();
  const [hiddenPassword, setHiddenPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, {});

  function reducer(prev, action) {
    if (action.type === "signup" ) {
      if (JSON.parse(localStorage.getItem(userName))) {

        setError(`The Username is already exist`);
        return { prev };
      } else {
        return {
          username: userName,
          fullName: fullName,
          email: email,
          password: hiddenPassword,
        };
      }
    } else {
      return prev;
    }
  }


  useEffect(() => {

    if (!JSON.parse(localStorage.getItem(userName))) {
      localStorage.setItem(userName, JSON.stringify(state));
      setError(null);
      setModeType("signin");
    }
  }, [state]);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <DataUeser.Provider
      value={{
        state,
        dispatch,
        user,
        setUser,
        userName,
        setUserName,
        fullName,
        setFullName,
        email,
        setEmail,
        password,
        setPassword,
        modeType,
        setModeType,
        error,
        setError,
        hiddenPassword,
        setHiddenPassword,
      }}
    >
      {children}
    </DataUeser.Provider>
  );
};

export default DataOfUser;
