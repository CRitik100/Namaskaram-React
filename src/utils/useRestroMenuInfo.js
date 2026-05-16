import { MENU_API } from "./constant";
import mockRestData from "./mockMenuData";
import { useState, useEffect } from "react";

const useRestroMenuInfo = (resId) => {
  const [restrauMenuDetails, setRestrauMenuDetails] = useState([]);
  const [restName, setRestName] = useState("Loading..!!");

  const fetchRestrauMenu = async () => {
    console.log("MENU_API + resId", MENU_API + resId);
    const response = await fetch(MENU_API + resId);
    // const data = await response.json();
    const data = mockRestData; //As API is not working, using mock data for development purpose

    const filteredData = data?.data?.cards
      .find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      );
    console.log("Filtered Data:", filteredData);
    setRestName(data?.data?.cards[0]?.card?.card?.text);
    setRestrauMenuDetails(filteredData);
  };

  useEffect(() => {
    fetchRestrauMenu();
  }, []);

  return { restrauMenuDetails, setRestrauMenuDetails, restName };
};

export default useRestroMenuInfo;
