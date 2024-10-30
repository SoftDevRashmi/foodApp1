import { useEffect, useState } from "react";
import { MENU_URL } from "./Constants";

const useRestaurantMenu = (resId) => {
  console.log(resId);
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json);
    console.log(resInfo);
  };
  console.log(resInfo);

  return resInfo;
};

export default useRestaurantMenu;
