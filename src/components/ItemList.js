import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemCards }) => {
  return (
    <div>
      {itemCards.map((item) => {
        return (
          <div className="p-2 m-2 border-b-2 border-gray-200 bg-gray-50 flex justify-between text-left">
            <div className="w-9/12">
              <div className="my-4 py-4">
                <span>{item?.card?.info?.name} - </span>
                <span>
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-2 m-2 relative">
              <div className="absolute z-10 mx-12 my-20 w-[100%]">
                <button className="bg-black rounded-lg text-white p-2">
                  Add +
                </button>
              </div>
              <div className="absolute">
                <img
                  className="rounded-lg"
                  src={CDN_URL + item?.card?.info?.imageId}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
