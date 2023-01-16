import "./App.css";
import Register from "./Component/Register/Register";
import { DataUeser } from "./DataOfUser";
import { useContext } from "react";
import Main from "./Component/Main/Main";

function App() {

  const { user } = useContext(DataUeser);


  return <div className="App">{!user ? <Register /> : <Main />}</div>;
}

export default App;
