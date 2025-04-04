import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-green-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`text-sm lg:text-lg rounded-full ${buttonStyles} border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={ ()=> onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
