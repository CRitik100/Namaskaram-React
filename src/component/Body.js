import { CDN_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const SearchContainer = (props) => {
  const { totalRestaurant, setRestaurantData } = props;
  const [searchText, setSearchText] = useState("");
  return (
    <div id="searchContainer">
      <input
        id="searchInput"
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        id="searchButton"
        onClick={() => {
          const searchedData = totalRestaurant.filter((data) =>
            data.card.card.info.name
              .toLowerCase()
              .includes(searchText.toLowerCase()),
          );
          setRestaurantData(searchedData);
        }}
      >
        Search
      </button>
      <button
        id="filterButton"
        onClick={() => {
          const filteredData = totalRestaurant.filter(
            (data) => data?.card?.card?.info?.avgRatingString > 4.2,
          );
          setRestaurantData(filteredData);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

const RestrauntCard = (props) => {
  const { restaurant } = props;
  const { name, cuisines, avgRatingString, cloudinaryImageId } =
    restaurant?.card?.card?.info;
  return (
    <div className="restrauntCard">
      <img
        className="restrauntImage"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <span className="restrauntName"> {name}</span>
      <div className="restrauntValues">
        <span className="restrauntPrice">{cuisines.join(", ")}</span>
        <span className="restrauntRating">{"*" + avgRatingString}</span>
      </div>
    </div>
  );
};

const RestrauntContainer = (props) => {
  const { restaurantData } = props;
  return (
    <div id="restrauntContainer">
      {restaurantData.map((data) => (
        <RestrauntCard key={data.card.card.info.id} restaurant={data} />
      ))}
    </div>
  );
};

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [totalRestaurant, setTotalRestaurant] = useState([]);
  // Whenever state variable update, react trigger the reconcillation cycle(Re-render the component)

  console.log("Total Restaurant : ", totalRestaurant);
  console.log("Visible Restaurant : ", restaurantData);

  useEffect(() => {
    console.log("Use Effect called...");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0975711&lng=72.90323699999999&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    const json = await data.json();
    const desiredData = json?.data?.cards.filter(
      (data) =>
        data?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    );
    console.log("Data received from API => ", desiredData);
    setTotalRestaurant(desiredData);
    setRestaurantData(desiredData);
  };

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mainBody">
      <SearchContainer
        totalRestaurant={totalRestaurant}
        setRestaurantData={setRestaurantData}
      />
      <RestrauntContainer restaurantData={restaurantData} />
    </div>
  );
};

export default Body;
