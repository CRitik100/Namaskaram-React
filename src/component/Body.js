import mockRestaurantData from "../utils/mock_data";
import { CDN_URL } from "../utils/constant";
import { useState } from "react";

const SearchContainer = (props) => {
    const {restaurantData, setRestaurantData} = props;
    return (
        <div id="searchContainer">
            <input id="searchInput" type="text" placeholder="Search for restaurant, cuisine or a dish"/>
            <button id="searchButton">Search</button>
            <button id="filterButton" onClick={() => {
                const filteredData = restaurantData.filter((data) => data.card.card.info.avgRatingString > 4.2);
                setRestaurantData(filteredData);
            }}>Top Rated Restaurants</button>
        </div>
    )
};

const RestrauntCard = (props) => {
    const {restaurant} = props;
    const {name, cuisines, avgRatingString, cloudinaryImageId} = restaurant?.card?.card?.info;
    return (
            <div className="restrauntCard">
                <img className="restrauntImage" src={CDN_URL + cloudinaryImageId} alt={name}/>
                <span className="restrauntName"> {name}</span>
                 <div className="restrauntValues">
                    <span className="restrauntPrice">{cuisines.join(", ")}</span>
                    <span className="restrauntRating">{"*"+avgRatingString}</span>
                </div>
            </div>
    )
};

const RestrauntContainer = (props) => {
    const {restaurantData} = props;
    return (
        <div id="restrauntContainer">
            {restaurantData.map((data) =>(
                <RestrauntCard key={data.card.card.info.id} restaurant={data}/>
            ))}
        </div>
    )
};

const Body = () => {
    const [restaurantData, setRestaurantData] = useState(mockRestaurantData);

    return (
        <div className="mainBody">
            <SearchContainer restaurantData={restaurantData} setRestaurantData={setRestaurantData}/>
            <RestrauntContainer restaurantData={restaurantData}/>
        </div>
    )
};

export default Body;