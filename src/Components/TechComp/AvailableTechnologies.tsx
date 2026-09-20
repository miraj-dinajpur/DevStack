import React from "react";
import type { Technology } from "./type";
import AvailableTechnologiesCard from "./AvailableTechnologiesCard";

interface AvailableTechnologiesProps {
    isAdded: string[];
    setIsAdded: React.Dispatch<React.SetStateAction<string[]>>
  technologies: Technology[];
  stackTechs: Technology[];
  setStackTechs: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const AvailableTechnologies = ({
  technologies,
  stackTechs,
  setStackTechs,
  isAdded,
  setIsAdded
}: AvailableTechnologiesProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {technologies.map((technology, idx) => (
        <AvailableTechnologiesCard
          key={idx}
          technology={technology}
          stackTechs={stackTechs}
          setStackTechs={setStackTechs}
          isAdded={isAdded}
          setIsAdded={setIsAdded}
        />
      ))}
    </div>
  );
};

export default AvailableTechnologies;
