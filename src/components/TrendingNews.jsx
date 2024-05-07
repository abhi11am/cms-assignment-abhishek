import React from "react";
import Heading from "./Heading";
import NewsCard from "./NewsCard";
import useNewsHomeController from "../controllers/useNewsHomeController";

const TrendingNews = () => {
  const { trendingNews, onNewsClick } = useNewsHomeController();
  return (
    <div className="space-y-4 px-4 md:px-0">
      <Heading>Trending News</Heading>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {trendingNews?.map((item) => (
          <div key={item.id} className="col-span-1">
            <NewsCard
              item={item}
              onClick={() => onNewsClick("trending_news", item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
