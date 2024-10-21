import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Job from './Components/Job/Job';
import Applied from './Components/Applied/Applied';
import BLogs from './Components/Blogs/BLogs';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, 
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }, 
      {
        path:'/jobs',
        element:<Job></Job>
      }, 
      {
        path:"/Applied",
        element:<Applied> </Applied>,
        loader:() => fetch('../public/jobs.json')
      }, 
      {
        path:'Blogs', 
        element:<BLogs></BLogs>
      }, 
      {
        path:'/Statistics', 
        element:<Statistics> </Statistics>
      },
      {
        path:'/job/:id',

        element:<JobDetails></JobDetails>,
        loader: ()=> fetch('../public/jobs.json')

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
