import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataOfUser from "./DataOfUser";
import ImageFileContextProvider from "./context/ImageFileContext";
import PersonalDetailsContextProvider from "./context/PersonalDetailsContext";
import WorkHistoryContextProvider from "./context/WorkHistoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataOfUser>
    <ImageFileContextProvider>
    <PersonalDetailsContextProvider>
      <WorkHistoryContextProvider>
      <App />
      </WorkHistoryContextProvider>
      </PersonalDetailsContextProvider>
    </ImageFileContextProvider>
  </DataOfUser>
);
