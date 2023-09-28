import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withRestaurantCardOffers } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUserName, setUserName } = useContext(UserContext);

  const RestaurantCardOffers = withRestaurantCardOffers(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log(resData);
    setlistOfRestaurants(resData);
    setFilterListOfRestaurants(resData);
  };

  // const onlineStatus = useOnlineStatus();
  // if (onlineStatus === false) {
  //   return (
  //     <h1>
  //       Looks like you are offline. Please check your internet connection!!
  //     </h1>
  //   );
  // }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex items-center justify-between">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="m-4 bg-green-100 px-4 py-2 rounded-xl"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log(filteredResList);
              setFilterListOfRestaurants(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4">
          <button
            className="bg-green-100 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setFilterListOfRestaurants(filteredResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search p-4 m-4">
          <input
            type="text"
            value={loggedInUserName}
            className="bg-green-100 px-4 py-2 rounded-lg"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {!restaurant.info.hasOwnProperty("aggregatedDiscountInfoV3") ? (
              <RestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCardOffers resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
