import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../LocalStorege/LocalStorage';
import { BiArrowFromTop } from "react-icons/bi";
import AppliedJob from '../AppliedJob/AppliedJob';


const Applied = () => {
    const jobs=useLoaderData()
  
    const [appliedJOb , setAppliedjob]=useState([])
    const [displayJObs, setDisplayJobs]=useState([])
    useEffect(() => {
        const stortedJobs =getStoredJobApplication()
        console.log(stortedJobs)
        if(jobs.length >0){

let jobApplied=[]
for( const id of stortedJobs){
    const job =jobs.find(job => job.id === id)
    if(job){
        jobApplied.push(job)
    }
    setAppliedjob(jobApplied)
    setDisplayJobs(jobApplied)
    
}

        }
        
    },[])
    return (
        <div>
             <h4> I have applied the job {appliedJOb.length} </h4>
            <div className='   '>
            <div className="dropdown dropdown-bottom flex justify-end">
  <div tabIndex={0} role="button" className="btn m-1">Filter by <BiArrowFromTop />
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>All </a></li>
    <li><a>Remote</a></li>
    <li><a>onsite</a></li>
  </ul>
</div>
            </div>
            
           
            {
             displayJObs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob> )   
            }
        </div>
    );
};

export default Applied;