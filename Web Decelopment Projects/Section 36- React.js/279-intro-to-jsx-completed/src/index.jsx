/*
// Jeito Antigo
var React = require("react");
var ReactDOM = require("react-dom");

// São o mesmo codigo
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChlid(h1);
*/

// Agora podemos simplesmente importar
import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Hello Word!</h1>, document.getElementById("root"));
// Note que n da para add mais um elemento innerHTML
// ReactDOM.render(<h1>Hello Word!</h1> <p>This is a paragraph</p>, document.getElementById("root"));

// P/ fazer isso faça
ReactDOM.render(
  <div>
    <h1>Hello Word!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
