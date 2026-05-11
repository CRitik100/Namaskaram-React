import { useState } from "react";

const SearchBar = (props) => {
  const { totalRestaurant, setRestaurantData } = props;
  const [searchText, setSearchText] = useState("");

  return (
    <div id="SearchContainer">
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
            data?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
          );
          setRestaurantData(searchedData);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
