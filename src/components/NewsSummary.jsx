import React from "react";
import NewsMetaData from "./NewsMetaData";
import {
  ArrowLeftIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";
import moment from "moment";
import useNewsSummaryController from "../controllers/useNewsSummaryController";
import Loading from "./Loading";

const NewsSummary = () => {
  const { isNewsSummaryLoading, newsSummary, onBackClick } =
    useNewsSummaryController();

  if (isNewsSummaryLoading) return <Loading />;

  return (
    <div className="">
      <div className="relative">
        <button
          className="absolute left-4 top-4 p-2 text-gray-800 bg-white rounded-full"
          onClick={() => onBackClick()}
        >
          <ArrowLeftIcon className="w-4 h-auto" />
        </button>
        <img
          src={newsSummary.coverImage}
          alt="news cover"
          className="w-full h-72 lg:h-96 max-w-full object-cover"
        />
        <div className="absolute bottom-0 w-full p-4 pt-24 z-10 bg-gradient-to-t from-gray-950">
          <div className="text-xs text-white mb-2 truncate">
            {newsSummary.category}
          </div>
          <h1 className="text-white font-bold mb-2">{newsSummary.title}</h1>
          <div className="flex items-center space-x-4 text-white text-xs mb-6">
            <NewsMetaData
              icon={<ArrowTrendingUpIcon className="w-4 h-auto" />}
              value={newsSummary.newsViews}
            />
            <NewsMetaData
              icon={<CalendarIcon className="w-4 h-auto" />}
              value={moment(newsSummary.published).format("Do MMM, YYYY")}
            />
          </div>
        </div>
      </div>
      <div
        className="news-summary w-full relative bg-white p-4 rounded-xl -translate-y-4 z-20"
        dangerouslySetInnerHTML={{ __html: newsSummary.summary }}
      ></div>
    </div>
  );
};

export default NewsSummary;
