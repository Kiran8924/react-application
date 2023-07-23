import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Remove the file extension from the import statement
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
