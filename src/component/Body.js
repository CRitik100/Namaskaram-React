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
            data?.info?.name
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
            (data) => data?.info?.avgRatingString > 4.2,
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
    restaurant?.info;
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
        <RestrauntCard key={data?.info?.id} restaurant={data} />
      ))}
    </div>
  );
};

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [totalRestaurant, setTotalRestaurant] = useState([]);
  // Whenever state variable update, react trigger the reconcillation cycle(Re-render the component)

  useEffect(() => {
    console.log("Use Effect called...");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0975711&lng=72.90323699999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const desiredData = (json?.data?.cards.find(
      (data) =>
        data?.card?.card?.["id"] ===
        "top_brands_for_you"
    ))?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
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
