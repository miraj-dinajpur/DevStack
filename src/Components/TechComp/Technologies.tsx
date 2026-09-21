
import { use, useState } from "react";
import AvailableTechnologies from "./AvailableTechnologies";
import type { Technology } from "./type";
import YourStack from "./YourStack";

const Technologies = ({
  techPromise,
}: {
  techPromise: Promise<Technology[]>;
}) => {
  const technologies = use(techPromise);
  const [stackTechs, setStackTechs] = useState<Technology[]>([]);
  const [isAdded,setIsAdded] = useState<string[]>([]);

  return (
    <div className="container mx-auto grid grid-cols-1  lg:grid-cols-12 gap-5 p-4">
      <div className=" lg:col-span-9">
        <AvailableTechnologies
          technologies={technologies}
          stackTechs={stackTechs}
          setStackTechs={setStackTechs}
          isAdded={isAdded}
          setIsAdded={setIsAdded}
        />
      </div>
      <div className="lg:col-span-3">
        <YourStack isAdded={isAdded} setIsAdded={setIsAdded} stackTechs={stackTechs} setStackTechs={setStackTechs} />
      </div>
    </div>
  );
};

export default Technologies;
