import React from "react";
import useNewsController from "../controllers/useNewsController";

const Categories = () => {
  const { categories } = useNewsController();
  return (
    <div className="flex items-center overflow-auto no-scrollbar space-x-6 p-4 md:px-0">
      {categories?.map((item, index) => (
        <a
          key={item.catId}
          href="javasript:;"
          className={`relative block py-2 text-sm text-nowrap ${
            index === 0 ? "text-gray-800" : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {index === 0 ? (
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-600 rounded-full"></span>
          ) : (
            ""
          )}
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default Categories;
