import React, { useState } from "react";
import type { Technology } from "./type";

interface AvailableTechnologiesProps {
  technology: Technology;
  stackTechs: Technology[];
  setStackTechs: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const AvailableTechnologiesCard = ({
  technology,
  stackTechs,
  setStackTechs,
}: AvailableTechnologiesProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const handleAdded = (type: "Added") => {
    setIsAdded(true);
    setStackTechs([...stackTechs,technology]);
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md flex flex-col justify-between h-full">
      <div>
        {/* Top Section: Icon & Badge */}
        <div className="flex items-center justify-between mb-4">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-9 h-9 object-contain"
          />
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-500 border border-blue-100">
            {technology.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {technology.name}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 min-h-[48px] mb-6">
          {technology.description}
        </p>
      </div>

      <div>
        {/* Category, Difficulty & Rating */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
            {technology.category}
          </span>
          <span className="font-medium text-slate-500">
            {technology.difficulty}
          </span>
          <div className="flex items-center gap-1 font-bold text-slate-700">
            <span className="text-amber-400 text-sm">★</span>
            <span>{technology.rating}</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => handleAdded("Added")}
          className="cursor-pointer w-full bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-xl font-medium text-sm py-2.5 transition-colors"
          disabled={isAdded}
        >
          {isAdded === false ? "Add to Stack" : "Added"}
        </button>
      </div>
    </div>
  );
};

export default AvailableTechnologiesCard;
