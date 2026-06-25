/*const heading =document.createElement("h1");
 heading.innerHTML="nam";
 const root=document.getElementById("root");
 root.appendChild(heading);*/
import React from "react"
import ReactDOM from "react-dom/Client"
/*const heading = React.createElement("h1", { id: "title",className:"p" }, "nam");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const head = React.createElement(
  "div",
  {style: {
            color: "red",
            backgroundColor: "yellow"
        }},
  [
    React.createElement("h1", {key:1}, "first"),
    React.createElement("h2", {key:2}, "second"),
  ],
  "name",
 
);

const r = ReactDOM.createRoot(document.getElementById("r"));
r.render(head);*/
/*const parent = React.createElement(
    "div",
    {},
    React.createElement(
        "h1",
        {},
        "Hello"
    )
);*/
const H=
  (<div><h1>hii</h1></div>)
;
 const Heading =()=>{ (
  <div><h1>hiii
    </h1>{H}</div>);};
const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Heading/>);