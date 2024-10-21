import React from 'react';

const AppliedJob = ({job}) => {
   const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job
    return (
        <div className=''>
           <div className='  lg:flex justify-between items-center mt-6 p-7 	'>
            <div className='flex items-center space-x-8'>
<div className='bg-[#F4F4F4] px-11 py-24'>
    <img src={logo} alt="" />
    </div>
<div className='space-y-4'><h4 className='text-2xl font-extrabold'>{job_title}</h4> <p className='text-2xl font-semibold'>{company_name}</p>
<div className='space-x-4'>
    <button className='px-5 py-1 border font-extrabold rounded'>{remote_or_onsite}</button>
<button className='px-5 py-1 border font-extrabold rounded'>{job_type}</button>
    
</div>
<div className='flex space-x-4'>
<p className='text-xl font-semibold '>{location}</p>
<p className='text-xl font-semibold'>{salary}</p>
</div>
</div>
            </div>
            <div>
<button> View Details </button>
            </div>
           </div>
        </div>
    );
};

export default AppliedJob;