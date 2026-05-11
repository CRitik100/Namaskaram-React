import { useParams } from "react-router-dom";
import useRestroMenuInfo from "../utils/useRestroMenuInfo";
import { RESTRO_MENU_IMG_URL } from "../utils/constant";

const MenuItem = (props) => {
  const { menuItem } = props;
  const { name, imageId, description, defaultPrice } = menuItem?.card?.info;
  return (
    <div className="item">
      <div id="itemDetails">
        <div id="nameOfItem">{name}</div>
        <div id="costOfItem">Cost : {defaultPrice / 100}</div>
        <div id="descOfItem">{description}</div>
      </div>
      <img
        id="imageOfItem"
        src={RESTRO_MENU_IMG_URL + imageId}
      ></img>
    </div>
  );
};

const ListOfMenu = (props) => {
  const { optionsAvailable } = props;
  return (
    <div className="options">
      {optionsAvailable.map((item) => (
        <MenuItem key={item?.card?.info?.id} menuItem={item} />
      ))}
    </div>
  );
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restDetails, restName } = useRestroMenuInfo(resId);
  
  console.log("Restaurant Name:", restName);
  console.log("Restaurant Details:", restDetails);

  return (
    <div className="restaurantMenu">
      <h1>{restName + ", Presents to you"}</h1>
      {<ListOfMenu optionsAvailable={restDetails} />}
    </div>
  );
};

export default RestaurantMenu;
