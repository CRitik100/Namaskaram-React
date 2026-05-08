import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [restDetail, setRestDetail] = useState([]);

  useEffect(() => {
    console.log("Use Effect from Restraunt");
    fetchRestrauMenu();
  }, []);

  const resId = "769502";

  const fetchRestrauMenu = async () => {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0975711&lng=72.90323699999999&restaurantId=733190&catalog_qa=undefined&submitAction=ENTER`,
      );

      const data = response.json();
      
      console.log("menu data:", data);

      // setRestDetail(data);
  };

  return (
    <div className="restaurantMenu">
      <div id="nameOfRest">Name Of Restraunt</div>
      <h3>Menu:</h3>
      <ul>
        <li className="item">1</li>
        <li className="item">2</li>
        <li className="item">3</li>
        <li className="item">4</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
