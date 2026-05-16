import { useState, createContext } from "react";
import { useParams } from "react-router-dom";
import useRestroMenuInfo from "../utils/useRestroMenuInfo";
import ListOfMenu from "./ListOfMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restrauMenuDetails, setRestrauMenuDetails, restName } =
    useRestroMenuInfo(resId);
  const [desiredIndex, setDesiredIndex] = useState(null);

  console.log("Restaurant Name:", restName);
  console.log("Restaurant Details:", restrauMenuDetails);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-white font-bold p-2 bg-amber-600 rounded-tr-2xl rounded-bl-2xl">
        {restName + ", Presents to you"}
      </h1>
      <div className="flex flex-col gap-2 mt-4">
        {restrauMenuDetails.map((data, index) => {
          const actualReqData = data?.card?.card?.itemCards;
          return (
            // Controlled Component.
            <ListOfMenu
              key={data?.card?.card?.title}
              category={data?.card?.card?.title}
              optionsAvailable={actualReqData}
              accordianStatus={index === desiredIndex && true}
              clickFunction={(data = index) => setDesiredIndex(data)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
