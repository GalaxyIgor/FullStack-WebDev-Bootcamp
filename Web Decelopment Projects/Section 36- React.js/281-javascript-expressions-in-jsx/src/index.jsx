import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const number = 7;

/*
// 1. Code
ReactDOM.render(
  <div>
    <h1>Hello {fName}!</h1>
    <p> Your lucky number is {number}</p>
  </div>,

  document.getElementById("root")
);
*/

/*
// 2. Code
ReactDOM.render(
  <div>
    <h1>Hello {fName}!</h1>
    <p> Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,

  document.getElementById("root")
);
*/

// 3. Code
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p> Your lucky number is {number}</p>
  </div>,

  document.getElementById("root")
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
