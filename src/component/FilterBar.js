const FilterBar = (props) => {
  const { totalRestaurant, setRestaurantData } = props;

  return (
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
  );
};

export default FilterBar;
