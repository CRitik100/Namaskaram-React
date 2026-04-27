import React from "react";
import ReactDOM from "react-dom/client";


//  Root use to render.
const root = ReactDOM.createRoot(document.getElementById("root"));

// React.createElement() => ReactElement-> JS Object => HTML Element when it's rendered 
const headingElement = React.createElement("h1",{id : "heading"}, "Ritik's React App..!!🚀");

// JSX is a JavaScript syntax that looks like HTML but it's not HTML.
// It is transpiled by Babel (via tools like Parcel) into React.createElement().
// This creates React elements (JS objects), which React uses to render the DOM.
// JSX attributes use camelCase:

const jsxElement = <h1 id="heading">This is JSX</h1>

// React Components 
// 1. Class Based Component  --> Old
// 2. Function Based Component --> New => The JS function or class that returns a React element (JSX) is called a functional Component.

const TitleComponent =() => (<h1>This is the Title of the App</h1>)

const HeadingComponent = () => { 
    return (
    < div id ="headingContainer">
        {TitleComponent()}
        <TitleComponent/>  
        <TitleComponent></TitleComponent>  
        <h1 id = "heading">
        This is Functional Component
        </h1>
        <h2>{("This is a console log inside JSX")}</h2>
    </div>)}

const jsxHeadingElement = <h1 id="heading" tabIndex={5}>Ritik's React App using JSX..!!🚀 <HeadingComponent/></h1>;


root.render(jsxHeadingElement);