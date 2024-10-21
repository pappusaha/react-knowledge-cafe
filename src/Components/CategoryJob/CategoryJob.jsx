import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { Link } from 'react-router-dom';


const CategoryJob = ({job}) => {
    const {id, logo,job_title,company_name, remote_or_onsite, location, job_type, salary}=job
    return (
        <div>
          <div className=" p-8 bg-base-100  shadow-xl">
  <figure className=''>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="">

    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className='space-x-4'>
        <button className='py-2 px-4 font-extrabold border rounded border-[#7E90FE] text-[#9873FF]'>{remote_or_onsite}</button>
        <button className='py-2 px-4 font-extrabold border rounded border-[#7E90FE] text-[#9873FF]'>{job_type}</button>
    </div>
    <div className='flex space-x-7'>
        <h2 className='flex items-center '><CiLocationOn />
        {location}</h2>
        <h2 className='flex items-center'> <MdOutlineCurrencyExchange /> {salary}</h2>
       
    </div>
    <div
     className="card-actions">
     <Link to={`/job/${id}`}>  <button className="btn btn-primary">View Details</button> </Link>
 
    </div>
  </div>
  
</div>


        </div>
    );
};

export default CategoryJob;