import { createContext, useEffect, useReducer, useState } from "react";
import CvStyle1 from "./Component/CV/CvStyle1/CvStyle1";
import CvStyle2 from "./Component/CV/CvStyle2/CvStyle2";
import CvStyle3 from "./Component/CV/CvStyle3/CvStyle3";
export const DataUeser = createContext();
const nameOfUser = JSON.parse(localStorage.getItem("user"));

const DataOfUser = ({ children }) => {
  const [color, setColor] = useState("#6666ff");
  const [userName, setUserName] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState(nameOfUser);
  const [modeType, setModeType] = useState("signup");
  const [error, setError] = useState();
  const [hiddenPassword, setHiddenPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, {});
  const [style, diStyle] = useReducer(restyle, <CvStyle1 />);
  function restyle(prev, action) {
    if (action.type === "style1") {
      return <CvStyle1 />;
    } else if (action.type === "style2") {
      return <CvStyle2 />;
    } else if (action.type === "style3") {
      return <CvStyle3 />;
    } else {
      return prev;
    }
  }

  function reducer(prev, action) {
    if (action.type === "signup") {
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
        color,
        setColor,
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
        style,
        diStyle,
      }}
    >
      {children}
    </DataUeser.Provider>
  );
};

export default DataOfUser;
