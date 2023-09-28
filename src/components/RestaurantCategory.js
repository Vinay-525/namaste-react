import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, status, handleClick, index }) => {
  //   const [showAccordianBody, setShowAccordianBody] = useState(false);
  const handleClickAccord = () => {
    handleClick(index);
  };
  return (
    <div className="cursor-pointer" onClick={() => handleClickAccord()}>
      <div className="w-6/12 mx-auto my-4 border-gray-400 bg-gray-50 shadow-lg rounded-lg p-2">
        <div className="flex justify-between">
          <span className="font-bold">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        {status && <ItemList itemCards={data?.itemCards}></ItemList>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
