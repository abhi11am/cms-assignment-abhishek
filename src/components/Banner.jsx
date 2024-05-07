import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowTrendingUpIcon, CalendarIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import NewsMetaData from "./NewsMetaData";
import useNewsController from "../controllers/useNewsController";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  centerPadding: "0px",
  slidesToShow: 1,
  speed: 500,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerPadding: "20px",
      },
    },
  ],
};

const Banner = () => {
  const { banners, onNewsClick } = useNewsController();
  return (
    <Slider {...settings}>
      {banners?.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer px-2 md:px-0"
          onClick={() => onNewsClick("banners", item.id)}
        >
          <div className="relative">
            <img
              src={item.coverImage}
              alt="news cover"
              className="w-full h-52 md:h-72 object-cover rounded-xl"
            />
            <div className="absolute bottom-0 w-full p-4 pt-10 z-10 bg-gradient-to-t from-gray-950 rounded-b-xl">
              <div className="flex items-center space-x-4 text-white text-xs mb-2">
                <NewsMetaData
                  icon={<ArrowTrendingUpIcon className="w-4 h-auto" />}
                  value={item.newsViews}
                />
                <NewsMetaData
                  icon={<CalendarIcon className="w-4 h-auto" />}
                  value={moment(item.published).format("Do MMM, YYYY")}
                />
              </div>
              <h2 className="text-white font-bold ">{item.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
