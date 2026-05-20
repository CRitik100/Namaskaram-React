import { useState } from "react";
import { COMPANY_LOGO_URL, CART_LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import { useSelector } from "react-redux";

const LogoComponent = () => {
  return (
    <div className="w-33 rounded-full overflow-hidden">
      <img id="logo" src={COMPANY_LOGO_URL} alt="logo" />
    </div>
  );
};

const NavItemsComponent = () => {
  // Subrscribing to the store and getting the data from the store.
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart items : ", cartItems);
  return (
    <ul className="flex justify-center items-center w-3/4 text-amber-700 font-extrabold font-serif text-xl">
      <li className="px-4">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="px-4">
        <Link to={"/about"}>About Us</Link>
      </li>
      <li className="px-4">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="px-4">
        <Link to="/grocery">Grocery</Link>
      </li>
      <div className="flex relative">
        <Link to="/cart">
          <img
            className="w-19 ml-4 rounded-full"
            src={CART_LOGO_URL}
            alt="cart"
          />
          <span className="bg-amber-500 w-7 h-7 rounded-full absolute top-0 right-0 text-center text-amber-50">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </ul>
  );
};

const LoginComponent = () => {
  const [button_name, setButtonName] = useState("Login");
  return (
    <div className="flex items-center">
      <div className="p-1">{useInternetStatus() ? "🟢" : "🔴"}</div>
      <button
        className="p-1 font-extrabold  text-amber-700"
        onClick={() => {
          button_name === "Login"
            ? setButtonName("Logout")
            : setButtonName("Login");
        }}
      >
        {button_name}
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between">
      <LogoComponent />
      <NavItemsComponent />
      <LoginComponent />
    </div>
  );
};

export default Header;
