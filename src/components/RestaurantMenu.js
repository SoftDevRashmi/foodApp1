import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/Constants";
import RestarantCategory from "./RestaurantCategory";

import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState({});
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card?.itemCard
  );
  //  const { name, city } = resInfo?.data?.cards[2]?.card?.card?.info;

  //const { name, id } = resInfo?.data?.cards[2]?.card?.card?.info;
  // console.log(name);

  // cosnt resInfo?.data?data?.cards[2]?.card?.card?.info

  // console.log(name);

  /*setCategories(resInfo?.datacards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  categories.filter((c) => {
    return (
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });*/
};

return (
  <div className="text-center">
    <h1 className="font-bold  m-4 p-4 text-2xl">Hi....</h1>
  </div>
);

export default RestaurantMenu;
