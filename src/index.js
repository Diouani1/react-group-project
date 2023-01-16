import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import EduSkillProvider from "./Component/EduSkillContext/EduSkillContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EduSkillProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EduSkillProvider>
);
