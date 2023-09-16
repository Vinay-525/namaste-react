import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React Using JSX 🚀
  </h1>
);

// Example of Component Composition
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 id="heading">Namaste React Using Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
