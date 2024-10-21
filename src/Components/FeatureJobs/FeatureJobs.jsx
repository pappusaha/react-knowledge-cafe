import React, { useEffect, useState } from 'react';
import CategoryJob from '../CategoryJob/CategoryJob';

const FeatureJobs = () => {
    const [jobs , setJobs]=useState([])
    const [dataLength, setDatalength]=useState(4)
useEffect(() => {
    
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))



},[])
    return (
        <div>
        <div className=' text-center'>
        <h1 className='text-7xl'> Featured Jobs :{jobs.length}</h1>
        <p >Explore thousands of job opportunities with all the information you need. Its your future</p>
        <h5></h5>
        </div>
        <div className='grid grid-cols-2 gap-6'>
            {
                jobs.slice(0,dataLength).map(job => <CategoryJob key={job.id} job={job}></CategoryJob>)
            }
        </div>
        <div className={dataLength === jobs.length ? 'hidden': '' } >
<button onClick={() => setDatalength(jobs.length)} className='bg-[#7E90FE] text-white px-5 py-2 rounded'>
See All Jobs
</button>
</div>
        </div>
    );
};

export default FeatureJobs;