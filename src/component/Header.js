import {COMPANY_LOGO_URL, CART_LOGO_URL} from "../utils/constant";

const LogoComponent = () => {
    return (
        <div className="logoComponent">
            <img id="logo" src={COMPANY_LOGO_URL} alt="logo"/>
        </div>
    )
}

const NavItemsComponent = () => {
    return (
        <div className="navComponent">
            <ul id="navItems">
                <li id="links">Home</li>
                <li id="links">About Us</li>
                <li id="links">Contact Us</li>
                <img id="cart" src={CART_LOGO_URL} alt="cart"/>
                
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <LogoComponent/>
            <NavItemsComponent/>
        </div>        
    )
}

export default Header;