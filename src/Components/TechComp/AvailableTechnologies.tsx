import React from 'react';
import type { Technology } from "./type";
import AvailableTechnologiesCard from './AvailableTechnologiesCard';

const AvailableTechnologies = ({technologies}:{technologies:Technology[]}) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {technologies.map((technology,idx)=>(
                <AvailableTechnologiesCard key={idx} technology={technology}/>
            ))}
        </div>
    );
};

export default AvailableTechnologies;