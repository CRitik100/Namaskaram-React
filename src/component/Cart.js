import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "./ListOfMenu";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart items in cart component : ", cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="flex flex-col items-center gap-4 ">
      <div className="text-center text-4xl font-bold">Secure Checkout</div>
      <button
        className="self-end bg-amber-500 text-amber-50 font-bold text-m p-2 rounded-xl"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-1/2 bg-amber-100 p-4 rounded-xl shadow-2xl flex flex-col gap-4 outline-none">
        {cartItems.length === 0 ? (
          <div> Cart is Empty...!!!</div>
        ) : (
          cartItems.map((item) => (
            <MenuItem
              key={item.menuItem?.card?.info?.id + 11}
              menuItem={item.menuItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
