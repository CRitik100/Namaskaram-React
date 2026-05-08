import { useState, useEffect } from "react";
import mockRestData from "../utils/mockMenuData";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const MenuItem = (props) => {
  const { menuItem } = props;
  const { name, imageId, description, defaultPrice } = menuItem?.card?.info;
  return (
    <div className="item">
      <div id="itemDetails">
        <div id="nameOfItem">{name}</div>
        <div id="costOfItem">Cost : {defaultPrice / 100}</div>
        <div id="descOfItem">{description}</div>
      </div>
      <img
        id="imageOfItem"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          imageId
        }
      ></img>
    </div>
  );
};

const ListOfMenu = (props) => {
  const { optionsAvailable } = props;
  return (
    <div className="options">
      {optionsAvailable.map((item) => (
        <MenuItem key={item?.card?.info?.id} menuItem={item} />
      ))}
    </div>
  );
};

const RestaurantMenu = () => {
  const [restDetail, setRestDetail] = useState([]);
  const [restName, setRestName] = useState("Loading..!!");

  const { resId } = useParams();

  const fetchRestrauMenu = async () => {
    const response = await fetch(MENU_API + resId);

    const data = mockRestData; // As API is not working, using mock data for development purpose

    const filteredData = data?.data?.cards
      .find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (item) => item?.card?.card?.title === "Recommended",
      )?.card?.card?.itemCards;

    console.log("Available Menu:", data);

    setRestName(data?.data?.cards[0]?.card?.card?.text);
    setRestDetail(filteredData);
  };

  useEffect(() => {
    console.log("Use Effect from Restraunt");
    fetchRestrauMenu();
  }, []);

  return (
    <div className="restaurantMenu">
      <h1>{restName + ", Presents to you"}</h1>
      {<ListOfMenu optionsAvailable={restDetail} />}
    </div>
  );
};

export default RestaurantMenu;
