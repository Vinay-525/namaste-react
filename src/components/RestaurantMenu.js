import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(-1);

  if (resInfo === null) return <Shimmer />;

  const menuItems =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = menuItems.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleClick = (index) => {
    if (index === showIndex) {
      setShowIndex(-1);
    } else {
      setShowIndex(index);
    }
  };
  const { name, cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;
  console.log(categories);
  return (
    <div>
      <div className="p-2 text-center font-bold">
        <h2>Menu</h2>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
      </div>
      <ul>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            status={index === showIndex}
            handleClick={handleClick}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
