import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestroInfo from "../utils/useRestroInfo";
import RestrauntCard, { witBestLabelRestrauntCard } from "./RestrauntCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const SearchAndFilterContainer = (props) => {
  return (
    <div className="flex justify-around">
      <SearchBar {...props} />{" "}
      {/* Spread operator is used to pass all the props to the child component */}
      <FilterBar {...props} />
    </div>
  );
};

const BestRestrauntCard = witBestLabelRestrauntCard(RestrauntCard); // This is returning a new Component.

const RestrauntContainer = (props) => {
  const { restaurantData } = props;
  return (
    <div className="flex flex-wrap justify-center  gap-11 mt-11">
      {restaurantData.map((data) => (
        <Link
          key={data?.info?.id}
          to={"/restraunt/" + data?.info?.id}
          className="restrauntLink"
        >
          <div>
            {data?.info?.avgRating > 4.5 ? (
              <BestRestrauntCard restaurant={data} />
            ) : (
              <RestrauntCard restaurant={data} />
            )}
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
    <div className="flex flex-col mt-3 p-2">
      <SearchAndFilterContainer
        totalRestaurant={totalRestaurant}
        setRestaurantData={setRestaurantData}
      />
      <RestrauntContainer restaurantData={restaurantData} />
    </div>
  );
};

export default Body;
