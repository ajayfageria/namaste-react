import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Parent Div"),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "child h1 Div"),
    React.createElement("h3", {}, "child h3 Div"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
