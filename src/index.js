import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./css/styles.css";
import App from "./components/App";

import "jquery/dist/jquery.js";
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
