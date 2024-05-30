import React from "react";
import PropTypes from "prop-types";

const SkillBar = ({ name, level }) => {
  return (
    <div className="skill-bar my-4">
      <div className="bg-gray-800 h-14 w-full flex items-center rounded-lg">
        <div
          className="bg-purple-900 h-14 flex items-center shadow-md rounded-lg"
          style={{ width: `${level}%` }}
        >
          <span className="text-gray-200 text-3xl font-bold pl-2">{name}</span>
        </div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default SkillBar;
