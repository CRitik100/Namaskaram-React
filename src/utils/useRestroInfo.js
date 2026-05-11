import { useState, useEffect } from "react";
import { RESTRO_INFO_API } from "./constant";

const useRestroInfo = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [totalRestaurant, setTotalRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(RESTRO_INFO_API);
    const json = await data.json();
    const desiredData =
      json?.data?.cards.find(
        (data) => data?.card?.card?.["id"] === "top_brands_for_you",
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
    console.log("Data received from API => ", desiredData);
    setTotalRestaurant(desiredData);
    setRestaurantData(desiredData);
  };

  // Whenever state variable update, react trigger the reconcillation cycle(Re-render the component)
  useEffect(() => {
    fetchData();
  }, []);

  return {
    restaurantData,
    setRestaurantData,
    totalRestaurant,
    setTotalRestaurant,
  };
};

export default useRestroInfo;
