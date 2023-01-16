import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


import DataOfUser from "./DataOfUser";
import ImageFileContextProvider from "context/ImageFileContext";
import PersonalDetailsContextProvider from "context/PersonalDetailsContext";
import { BrowserRouter } from "react-router-dom";

import EduSkillProvider from "./Component/EduSkillContext/EduSkillContext";


import PrintPdfContextProvider from "context/PrintPdfContext";

import WorkHistoryContextProvider from "./context/WorkHistoryContext";
import LanguageContext from "context/LanguageContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <BrowserRouter>
    <DataOfUser>
      <ImageFileContextProvider>
        <PersonalDetailsContextProvider>
          <EduSkillProvider>
            <WorkHistoryContextProvider>
              <PrintPdfContextProvide>
               <LanguageContext>
                <App />
               </LanguageContext>
              </PrintPdfContextProvi>
            </WorkHistoryContextProvider>
          </EduSkillProvider>
        </PersonalDetailsContextProvider>
      </ImageFileContextProvider>
    </DataOfUser>
  </BrowserRouter>

);
