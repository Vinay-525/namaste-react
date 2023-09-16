import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Hello From React! 🚀"),
      React.createElement("h2", {}, "I am h2 elemt"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Hello From React!"),
      React.createElement("h2", {}, "I am h2 elemt"),
    ]),
  ]
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World From React"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
console.log(typeof root);

root.render(parent);
