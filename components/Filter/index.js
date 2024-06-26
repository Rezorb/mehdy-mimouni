import React from "react";

const Filter = ({ categories, filter, setFilter }) => {
  return (
    <div className="pt-8 flex flex-wrap justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-6 mx-2 mb-4 pt-4 pb-3 rounded ${filter === category ? "bg-purple-900 text-white text-xl tablet:text-2xl laptop:text-2xl font-bold" : "bg-gray-200 text-black text-xl tablet:text-2xl laptop:text-2xl font-bold"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
