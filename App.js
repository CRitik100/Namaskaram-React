const root = ReactDOM.createRoot(document.getElementById('root'));

const h1_tag =React.createElement("h1",{},"I am h1 tag.");
const h2_tag =React.createElement("h2",{},"I am h2 tag.");
const child = React.createElement("div",{id: "child",},[h1_tag,h2_tag]);
const parent = React.createElement("div",{id:"parent"},child);

root.render(parent);
