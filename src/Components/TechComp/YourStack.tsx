import React from "react";
import type { Technology } from "./type";
import YourStackCard from "./YourStackCard";

interface YourStackProps {
  isAdded: string[];
      setIsAdded: React.Dispatch<React.SetStateAction<string[]>>
  stackTechs: Technology[];
  setStackTechs: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const YourStack = ({
  stackTechs,
  setStackTechs,
  isAdded,
  setIsAdded
}: YourStackProps) => {
  return (
    <div>
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md flex flex-col justify-between text-lg gap-4">
        <h2 className="font-bold">Your Stack</h2>
        {stackTechs.length === 0 ? (
          <div>
            <p>No technologies selected yet</p>

            <p className="border-2 border-dotted text-center mt-4 py-3 px-2">
              Your Stack is empty
            </p>
          </div>
        ) : (
          <div>
            <h2>Selected Technologies: {stackTechs.length}</h2>
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
      </div>
    </div>
  );
};

export default YourStack;
