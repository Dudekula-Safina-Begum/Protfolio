
   import React from "react";

const Bar = ({ skill }) => {
  // skill = { name: "HTML", level: "90%", description: "Used for structuring web pages" }
 console.log(skill)
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-800">{skill.name}</p>
        <span className="text-sm text-gray-600">{skill.level}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: skill.level }}
        ></div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-1">{skill.description}</p>
    </div>
  );
};



export default Bar