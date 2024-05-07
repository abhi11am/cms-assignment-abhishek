import React from "react";
import Heading from "./Heading";
import NewsCard from "./NewsCard";
import useNewsController from "../controllers/useNewsController";

const BreakingNews = () => {
  const { breakingNews, onNewsClick } = useNewsController();
  return (
    <div className="space-y-4 px-4 md:px-0">
      <Heading>Breaking News</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {breakingNews?.map((item) => (
          <div key={item.id} className="col-span-1">
            <NewsCard
              item={item}
              onClick={() => onNewsClick("breaking_news", item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
