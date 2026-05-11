import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestroInfo from "../utils/useRestroInfo";
import RestrauntCard from "./RestrauntCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const SearchAndFilterContainer = (props) => {
  return (
    <div id="searchAndFilter">
      <SearchBar {...props} />{" "}
      {/* Spread operator is used to pass all the props to the child component */}
      <FilterBar {...props} />
    </div>
  );
};

const RestrauntContainer = (props) => {
  const { restaurantData } = props;
  return (
    <div id="restrauntContainer">
      {restaurantData.map((data) => (
        <Link
          key={data?.info?.id}
          to={"/restraunt/" + data?.info?.id}
          className="restrauntLink"
        >
          <div>
            <RestrauntCard restaurant={data} />
          </div>
        </Link>
      ))}
    </div>
  );
};

const Body = () => {
  const { restaurantData, setRestaurantData, totalRestaurant } =
    useRestroInfo();

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mainBody">
      <SearchAndFilterContainer
        totalRestaurant={totalRestaurant}
        setRestaurantData={setRestaurantData}
      />
      <RestrauntContainer restaurantData={restaurantData} />
    </div>
  );
};

export default Body;
