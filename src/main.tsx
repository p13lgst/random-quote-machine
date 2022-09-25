import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.min.css";
import { DarkModeProvider } from "./hooks/useDarkMode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <React.StrictMode>
      <DarkModeProvider>
        <App />
        {/* <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar
          className={"bg-black text-white"}
          toastClassName={"bg-black text-white"}
          progressClassName={"bg-black text-white"}
        /> */}
      </DarkModeProvider>
    </React.StrictMode>
  </>
);
