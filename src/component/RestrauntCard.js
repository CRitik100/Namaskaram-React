import { CDN_URL } from "../utils/constant";

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

export default RestrauntCard;
