import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { HiCurrencyDollar } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJObApplicaiton } from '../LocalStorege/LocalStorage';

const jobDetails= () => {

    const jobs=useLoaderData()
    const {id}=useParams()
    const idx=parseInt(id)
    const job=jobs.find(job => job.id === idx )
    // console.log(job, idx)
    const { logo,job_title,company_name, remote_or_onsite, location, job_type, salary}=job
    const handleapplyJob=() => {
        saveJObApplicaiton(idx)
        toast('YOu have applied the job successfully')
    }
    return (
        <div>
           <h2>JOb Details of :{job_title} </h2> 
           <div className="grid gap-4 md:grid-cols-4 ">
            <div className='border md:col-span-3'>
                <h2 className='text-4xl'> Details comeing here </h2>
                <p>{company_name}</p>




            </div>
            <div>
<h2 className='text-4xl border-b-2 pb-6'> Job Details</h2>
<div>
<h5><HiCurrencyDollar />
Salary : {}(Per Month)
</h5>
</div>
<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><button onClick={handleapplyJob} className='w-full py-4 text-white' >
<ToastContainer />    Apply now  </button></div>


            </div>
           
           </div>

        </div>
    );
};

export default jobDetails;