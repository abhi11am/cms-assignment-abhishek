import React from "react";
import Categories from "./Categories";
import Banner from "./Banner";
import TrendingNews from "./TrendingNews";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div className="space-y-6">
      <Categories />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-x-4 lg:gap-x-6 gap-y-10">
        <div className="md:col-span-4 space-y-10">
          <Banner />
          <BreakingNews />
        </div>
        <div className="md:col-span-2">
          <TrendingNews />
        </div>
      </div>
    </div>
  );
};

export default Home;
