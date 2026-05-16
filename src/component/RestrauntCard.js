import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestrauntCard = (props) => {
  const { restaurant } = props;
  const { name, cuisines, avgRatingString, cloudinaryImageId } =
    restaurant?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-between w-70 shadow-amber-800 rounded-4xl transition duration-75 hover:scale-90">
      <img
        className="shadow-amber-800 items-start rounded-4xl w-70"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <span className="text-center mt-2 font-bold"> {name}</span>
      <div className="flex justify-center items-center flex-wrap">
        <span className="p-2 text-center">{cuisines.join(", ")}</span>
        <span className="text-center">{"*" + avgRatingString}</span>
        <span>{loggedInUser}</span>
      </div>
    </div>
  );
};

/****
 * Higher Order Component (HOC) is a function that takes a component as an argument and returns a new component.
 * It is used to add some functionality to the existing component without modifying the original component.
 * It is a pure function that takes a component and returns a new component.
 */

export const witBestLabelRestrauntCard = (OldComponent) => {
  return (props) => (
    <div className="relative">
      <div className="absolute  bg-red-600 text-white rounded-tl-2xl rounded-br-xl w-fit px-3">
        Best
      </div>
      <OldComponent {...props} />
    </div>
  );
};

export default RestrauntCard;
