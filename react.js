/*const heading =document.createElement("h1");
 heading.innerHTML="nam";
 const root=document.getElementById("root");
 root.appendChild(heading);*/

const heading = React.createElement("h1", { id: "title",className:"p" }, "nam");
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
r.render(head);

/*const parent = React.createElement(
    "div",
    {},
    React.createElement(
        "h1",
        {},
        "Hello"
    )
);*/
 