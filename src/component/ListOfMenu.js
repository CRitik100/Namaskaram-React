import { useState } from "react";
import { RESTRO_MENU_IMG_URL } from "../utils/constant";

const MenuItem = (props) => {
  const { menuItem } = props;
  const { name, imageId, description, defaultPrice } = menuItem?.card?.info;
  return (
    <div className="flex justify-between px-2 border-b-4 border-amber-200 pb-2">
      <div id="itemDetails">
        <div id="nameOfItem">{name}</div>
        <div id="costOfItem">Cost : {defaultPrice / 100}</div>
        {/* <div id="descOfItem">{description}</div> */}
      </div>
      <img
        className="w-15 rounded-4xl"
        src={RESTRO_MENU_IMG_URL + imageId}
      ></img>
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
