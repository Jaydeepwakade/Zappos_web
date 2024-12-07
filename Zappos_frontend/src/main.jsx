import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import NewModalProvider from "./contexts/newModalContext.jsx";


createRoot(document.getElementById("root")).render(
<NewModalProvider>
  <ModalProvider>
    <BrowserRouter>
      < App />
    </BrowserRouter>
  </ModalProvider>
  </NewModalProvider>
 
);
