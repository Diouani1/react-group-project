import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataOfUser from "./DataOfUser";
import ImageFileContextProvider from "./context/ImageFileContext";
import PersonalDetailsContextProvider from "./context/PersonalDetailsContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataOfUser>
      <ImageFileContextProvider>
        <PersonalDetailsContextProvider>
          <App />
        </PersonalDetailsContextProvider>
      </ImageFileContextProvider>
    </DataOfUser>
  </BrowserRouter>
);
