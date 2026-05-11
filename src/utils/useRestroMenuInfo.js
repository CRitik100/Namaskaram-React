import { MENU_API } from "./constant";
import mockRestData from "./mockMenuData";
import { useState, useEffect } from "react";

const useRestroMenuInfo = (resId) => {
  const [restDetails, setRestDetails] = useState([]);
  const [restName, setRestName] = useState("Loading..!!");

  const fetchRestrauMenu = async () => {
    const response = await fetch(MENU_API + resId);
    // const data = await response.json();
    const data = mockRestData; // As API is not working, using mock data for development purpose

    const filteredData = data?.data?.cards
      .find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (item) => item?.card?.card?.title === "Recommended",
      )?.card?.card?.itemCards;

    setRestName(data?.data?.cards[0]?.card?.card?.text);
    setRestDetails(filteredData);
  };

  useEffect(() => {
    fetchRestrauMenu();
  }, []);

  return { restDetails, restName };
};

export default useRestroMenuInfo;
