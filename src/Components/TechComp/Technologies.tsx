import React, { use, useState } from "react";
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
  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 p-4">
      <div className="col-span-9">
        <AvailableTechnologies technologies={technologies} stackTechs={stackTechs} setStackTechs={setStackTechs} />
      </div>
      <div className="col-span-3">
        <YourStack stackTechs={stackTechs} setStackTechs={setStackTechs} />
      </div>
    </div>
  );
};

export default Technologies;
