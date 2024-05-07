import moment from "moment";
import React from "react";

const TrendingNewsCard = ({ item, onClick }) => {
  return (
    <div
      className="group flex items-center space-x-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-24">
        <img
          src={item.coverImage}
          alt="news cover"
          className="w-24 h-24 object-cover  rounded-xl"
        />
      </div>
      <div className="w-[calc(100%-7rem)]">
        <div className="text-xs text-gray-800 mb-2 truncate">
          {item.category}
        </div>
        <p className="text-sm font-bold line-clamp-2 text-gray-800 mb-1 group-hover:underline">
          {item.title}
        </p>
        <div className="text-xs text-gray-600">
          {moment(item.published).format("Do MMM, YYYY")}
        </div>
      </div>
    </div>
  );
};

export default TrendingNewsCard;
