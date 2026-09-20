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
      <div className="flex justify-between border-2 py-4 px-2 gap-2">
        <h2>Added: {addedTech.name}</h2>

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
