import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import List from "./component/list.jsx";

const express = require("express");
const cors = require("cors");

const app = express();

// Add the cors middleware
app.use(cors());

// Rest of your code...

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

ReactDOM.render(<List />, document.querySelector("#app"));
