import React from "react";
import ReactDOM from "react-dom/client";

// Root for rendiering.

const root = ReactDOM.createRoot(document.getElementById("root"));

const headline_1 =React.createElement("h1",{"key":"head_1"}, "Namaskaram Sathiyo..!!!");
const headline_2 =React.createElement("h2",{"key":"head_2"}, "Welcome to React JS..!!!");
const headline_3 =React.createElement("h3",{"key":"head_3"}, "Let's Start Learning React JS..!!!");

const headerElement = React.createElement("div", {"className":"titile"},[headline_1, headline_2, headline_3]);

// Now using JSX -> Javascript syntax.

const headline_11 = <h1>Namaskaram Sathiyo by JSX..!!!</h1>;
const headline_12 = <h2>Welcome to React JS..!!!</h2>;
const headline_13 = <h3>Let's Start Learning React JS..!!!</h3>;

const headerElementJSX = <div className="titile">{headline_11}{headline_12}{headline_13}</div>;

// Functional Component of JSX.

const Headline_21 = () => (<h1>Namaskaram Sathiyo by Functional Component..!!!</h1>);
const Headline_22 = () => (<h2>Welcome to React JS..!!!</h2>);
const Headline_23 = () => {
    return (<h3>Let's Start Learning React JS..!!!</h3>)
};

const HeaderElementFunctionalComponent = () => {
    return (
        <div className="titile">
            {Headline_21()}
            <Headline_22/>
            <Headline_23></Headline_23>
        </div>
    )
}

// Header component with functional component and JSX.

const HeaderComponent = () => {
    return (
        <div className="heading">

            <img id="logo" src="hello.png" alt="Namaste Logo" width="200px"/>
            <div id="searchBarBox">
                <span id="searchIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search">
                            <g>
                              <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
                            </g>
                        </svg>                    
                </span>
                <input id="searchBar" type="text" placeholder="Search here..."/>
                <button id="searchButton">Ready Go...</button>
            </div>
            <img id="userIcon" src="/user.png" alt="User Icon" width="50px"/>
        </div>
    )
}

root.render(<HeaderComponent/>);