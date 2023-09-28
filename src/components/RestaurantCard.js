import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    costForTwo,
    cloudinaryImageId,
    cuisines,
    avgRating,
    deliveryTime,
  } = resData.info;

  const userInfo = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[170px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        alt="res-logo"
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{userInfo.loggedInUserName}</h4>
    </div>
  );
};

export const withRestaurantCardOffers = (RestaurantCard) => {
  return (props) => {
    const offers = props?.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="mb-2 p-2 bg-black absolute rounded-lg text-white shadow-lg font-bold">
          {offers.header + " " + offers.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
