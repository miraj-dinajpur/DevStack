import React from "react";
import type { Technology } from "./type";
import YourStackCard from "./YourStackCard";

interface YourStackProps {
  stackTechs: Technology[];
  setStackTechs: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const YourStack = ({ stackTechs, setStackTechs }: YourStackProps) => {
  return (
    <div>
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md flex flex-col justify-between text-lg gap-4">
        <h2 className="font-bold">Your Stack</h2>
        {stackTechs.length===0 ? (
          <div>
            <p>No technologies selected yet</p>
          </div>
        ):(
          <div>
            <h2>Selected Technologies: {stackTechs.length}</h2>
          </div>
        )}
        {stackTechs.map(addedTech => (
          <YourStackCard addedTech={addedTech} stackTechs={stackTechs} setStackTechs={setStackTechs} />
        ))}
      </div>
      
    </div>
    
  );
};

export default YourStack;
