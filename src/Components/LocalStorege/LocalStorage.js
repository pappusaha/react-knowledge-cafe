const getStoredJobApplication =() => {
    const storedApplication =localStorage.getItem('job-applications')
    if(storedApplication){
        return JSON.parse(storedApplication) 
    }
    return []; 
}




const saveJObApplicaiton =id  => {
const storedApplications =getStoredJobApplication()
const exist =storedApplications.find(jobid => jobid === id)
if(!exist){
    storedApplications.push(id)
   localStorage.setItem('job-applications' , JSON.stringify(storedApplications))
}
}


export {saveJObApplicaiton, getStoredJobApplication}