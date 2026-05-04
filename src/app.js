import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

/*
mainContainer
    heading
        -Logo
        -Nav Items
    Body
        -Search 
        -Restaurant Container
            -Restaurant Card
                -Image
                -Name
                -price
                -rating
    Footer
        -Copyright
        -Links
        -Address
        -Contact
*/

const MainContainer = () => {
    return (
        <div className="mainContainer">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainContainer/>);