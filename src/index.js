import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import DataOfUser from "./DataOfUser";
import ImageFileContextProvider from "context/ImageFileContext";
import PersonalDetailsContextProvider from "context/PersonalDetailsContext";
import { BrowserRouter, HashRouter } from "react-router-dom";

import EduSkillProvider from "./Component/EduSkillContext/EduSkillContext";

import PrintPdfContextProvider from "context/PrintPdfContext";
import WorkHistoryContextProvider from "context/WorkHistoryContext";

import LanguageContext from "context/LanguageContext";
import PersonalityContextProvider from "context/PersonalityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <DataOfUser>
      <ImageFileContextProvider>
        <PersonalDetailsContextProvider>
          <EduSkillProvider>
            <WorkHistoryContextProvider>
              <PersonalityContextProvider>
                <PrintPdfContextProvider>
                  <LanguageContext>
                    <App />
                  </LanguageContext>
                </PrintPdfContextProvider>
              </PersonalityContextProvider>
            </WorkHistoryContextProvider>
          </EduSkillProvider>
        </PersonalDetailsContextProvider>
      </ImageFileContextProvider>
    </DataOfUser>
  </HashRouter>
);
