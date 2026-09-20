import React from "react";
import type { Technology } from "./type";

interface YourStackProps{
    stackTechs: Technology[];
    setStackTechs: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const YourStack = ({stackTechs,setStackTechs}:YourStackProps) => {
  console.log(stackTechs);
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md flex flex-col justify-between text-lg">
      <h2 className="font-bold">Your Stack</h2>
      <p className="text-sm text-gray-400 pb-4">No technologies selected yet</p>
      <div className="border border-dashed border-slate-200 rounded-2xl py-6 px-4 text-center">
        <p className="text-slate-400 text-sm">Your stack is empty.</p>
      </div>
            
    </div>
  );
};

export default YourStack;
