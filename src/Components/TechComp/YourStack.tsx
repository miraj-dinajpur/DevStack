import React from "react";
import type { Technology } from "./type";
import YourStackCard from "./YourStackCard";


interface YourStackProps {
  isAdded: string[];
  setIsAdded: React.Dispatch<React.SetStateAction<string[]>>;
  stackTechs: Technology[];
  setStackTechs: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const YourStack = ({
  stackTechs,
  setStackTechs,
  isAdded,
  setIsAdded,
}: YourStackProps) => {
  const handleRemoveAll = () => {
    setIsAdded([]);
    setStackTechs([]);
  };
  return (
    <div>
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md flex flex-col justify-between text-lg gap-4">
        <h2 className="font-bold">Your Stack</h2>
        {stackTechs.length === 0 ? (
          <div>
            <p className="text-slate-500 text-sm">
              No technologies selected yet
            </p>

            <p className="border-2 border-dotted text-center mt-4 py-3 px-2">
              Your Stack is empty
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-slate-500 text-sm">
              {stackTechs.length} Technology Selected
            </h2>
          </div>
        )}
        {stackTechs.map((addedTech) => (
          <YourStackCard
            addedTech={addedTech}
            stackTechs={stackTechs}
            setStackTechs={setStackTechs}
            isAdded={isAdded}
            setIsAdded={setIsAdded}
          />
        ))}
        {stackTechs.length !== 0 ? (
          <button
            onClick={handleRemoveAll}
            className="border border-red-500 rounded-lg text-lg font-semibold px-4 py-1 mt-5"
          >
            Remove All
          </button>
        ) : ("")}
      </div>
    </div>
  );
};

export default YourStack;
