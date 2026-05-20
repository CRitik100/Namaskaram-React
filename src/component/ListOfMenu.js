import { useState } from "react";
import { RESTRO_MENU_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const MenuItem = (props) => {
  const { menuItem } = props;
  const { name, imageId, description, defaultPrice } = menuItem?.card?.info;
  const dispatch = useDispatch();

  const handleAddItem = (itemName) => {
    dispatch(addItem(itemName));
  };

  return (
    <div className="flex justify-between px-2 border-b-4 border-amber-200 pb-2">
      <div id="itemDetails">
        <div id="nameOfItem">{name}</div>
        <div id="costOfItem">Cost : {defaultPrice / 100}</div>
        {/* <div id="descOfItem">{description}</div> */}
      </div>
      <div className="flex flex-col relative mb-6">
        <img
          className="w-40 rounded-xl"
          src={RESTRO_MENU_IMG_URL + imageId}
        ></img>
        <button
          className="text-green-500 w-21 p-1.5 bg-white rounded-xl absolute left-1/4 top-27 font-semibold cursor-pointer shadow-gray-800 hover:bg-gray-200"
          onClick={() => handleAddItem({menuItem})}
        >
          {" "}
          ADD{" "}
        </button>
      </div>
    </div>
  );
};

const ListOfMenu = (props) => {
  const { category, optionsAvailable, accordianStatus, clickFunction } = props;
  // const [accordianStatus, setAccordianStatus] = useState(false);

  const handleAcordian = () => {
    // setAccordianStatus(!accordianStatus);
    if (accordianStatus) {
      clickFunction(null);
    } else {
      clickFunction();
    }
  };

  return (
    <div className="flex flex-col w-2xl">
      <div className=" bg-amber-100 p-2 shadow-2xl rounded-xl my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleAcordian}
        >
          <div className="text-xl font-bold">
            {category + " (" + optionsAvailable.length + ")"}
          </div>
          <div
            className={
              "text-2xl transition-transform duration-500" +
              (accordianStatus ? " rotate-180" : " rotate-0")
            }
          >
            ↓
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {optionsAvailable.map(
            (item) =>
              accordianStatus && (
                <MenuItem key={item?.card?.info?.id} menuItem={item} />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ListOfMenu;
