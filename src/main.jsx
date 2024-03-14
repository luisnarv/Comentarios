import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CommentProvider } from "./context/commentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommentProvider>
      <App />
    </CommentProvider>
  </React.StrictMode>
);
