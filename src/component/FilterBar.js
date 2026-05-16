const FilterBar = (props) => {
  const { totalRestaurant, setRestaurantData } = props;

  return (
    <button
      className="bg-amber-500 p-3 rounded-4xl text-fuchsia-100 font-semibold"
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
