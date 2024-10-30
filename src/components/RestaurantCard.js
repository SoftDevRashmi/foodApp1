import { IMG_URL } from "../../utils/Constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info || {};
  // console.log(resData?.info?.cloudinaryImageId);

  return (
    <div className="m-4 h-80 p-4 w-[200px] rounded-lg bg-pink-50 hover:bg-pink-200">
      <img src={IMG_URL + cloudinaryImageId} className="rounded-lg h-32"></img>
      <h3 className="font-extrabold">{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;

//higher order component

//Higher order component takes another component and return component adding some features to it

//here we will take restaurantCard as input to our higher order component n return a coomponant
//adding promoted lable on top of it

export const WithPromotedLable = (RestaurantCard) => {
  return (props) => {
    console.log(props);
    const { resData } = props;
    return (
      <div className="">
        <label className="bg-white absolute text-red rounded-md p-3">
          {resData?.info?.aggregatedDiscountInfoV3?.discountTag}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
