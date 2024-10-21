import React from 'react';

const AppliedJob = ({job}) => {
    console.log('sdfas0',job)
    return (
        <div>
            <h1>
                
                {job.company_name}
            </h1>
            <h2>{job.remote_or_onsite}</h2>
        </div>
    );
};

export default AppliedJob;