import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const menuItems =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  const { name, imageId, price, ratings } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards[1]?.card?.info;

  return (
    <div className="menu">
      {menuItems.map((item) => {
        const { name, imageId, price, ratings } = item?.card?.info;
        return (
          <div>
            <h1>{name}</h1>
            <p>{price / 100}</p>
            <img src={CDN_URL + imageId} />
            <h2>Menu</h2>
            <ul>
              <li>Biryani</li>
              <li>Burgers</li>
              <li>Diet Coke</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
