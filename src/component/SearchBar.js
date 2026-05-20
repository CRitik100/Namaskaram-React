import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const SearchBar = (props) => {
  const { totalRestaurant, setRestaurantData } = props;
  const [searchText, setSearchText] = useState("");
  const data = useContext(UserContext);
  console.log("Use Context : " + data.loggedInUser);

  return (
    <div className="flex gap-5 ">
      <input
        className="bg-amber-500 w-[35ch] p-3 rounded-4xl outline-none"
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="p-3 rounded-4xl bg-amber-500 w-27 text-fuchsia-100 font-semibold"
        onClick={() => {
          const searchedData = totalRestaurant.filter((data) =>
            data?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
          );
          setRestaurantData(searchedData);
        }}
      >
        Search
      </button>
      {/* <div>{data.loggedInUser}</div> */}
    </div>
  );
};

export default SearchBar;
