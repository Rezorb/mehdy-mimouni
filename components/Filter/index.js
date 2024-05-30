import React from "react";

const Filter = ({ categories, filter, setFilter }) => {
  return (
    <div className="pt-8 flex justify-center space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-6 pt-4 pb-2 rounded ${filter === category ? "bg-purple-900 text-white text-2xl font-bold" : "bg-gray-200 text-black text-2xl font-bold"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
