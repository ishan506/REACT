const heading1 = React.createElement("h1",{title :"lo"},"hii");
const heading2 = React.createElement("h2",{title :"lol"},"hii");
const container =React.createElement("div",{title :"l"},[heading1 ,heading2]);
const root=ReactDOM.createRoot(document.getElementById("r"));
root.render(container);