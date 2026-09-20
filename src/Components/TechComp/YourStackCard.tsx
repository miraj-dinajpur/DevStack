import React from "react";
import type { Technology } from "./type";
import { TbTrash } from "react-icons/tb";

interface YourStackCardProps {
  isAdded: string[];
  setIsAdded: React.Dispatch<React.SetStateAction<string[]>>;
  addedTech: Technology;
  stackTechs: Technology[];
  setStackTechs: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const YourStackCard = ({
  addedTech,
  stackTechs,
  setStackTechs,
  isAdded,
  setIsAdded,
}: YourStackCardProps) => {
  const handleRemovedStack = (addedTech: Technology) => {
    const restStacks = stackTechs.filter(
      (stackTechs) => stackTechs.name != addedTech.name,
    );
    const activeButton = isAdded.filter((btnId) => btnId !== addedTech.id);
    setIsAdded(activeButton);
    setStackTechs(restStacks);
  };
  return (
    <div>
      <div className="flex justify-between border-1 border-slate-400 rounded-2xl py-4 px-2 gap-2">
        <div className="flex items-center gap-3.5">
          <img
            src={addedTech.icon}
            alt={addedTech.name}
            className="w-9 h-9 object-contain"
          />
          <div>
            <h4 className="font-bold text-slate-900 text-base leading-tight">
              {addedTech.name}
            </h4>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              {addedTech.category}
            </p>
          </div>
        </div>

        <span
          className="cursor-pointer"
          onClick={() => handleRemovedStack(addedTech)}
        >
          <TbTrash />
        </span>
      </div>
      
    </div>
  );
};

export default YourStackCard;
