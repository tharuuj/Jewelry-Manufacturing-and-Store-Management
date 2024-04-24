import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Headers/Headers";
import HomeEmp from "./Containers/EmployeePersonal/HomeEmp";
import Register from "./Containers/EmployeePersonal/RegisterEmp";
import Edit from "./Containers/EmployeePersonal/EditEmp";
import Profile from "./Containers/EmployeePersonal/ProfileEmp";

import HomeWorkHistory from "./Containers/WorkHistory/HomeWorkHistory"
import AddWorkHistory from "./Containers/WorkHistory/AddWorkHistory"
import ViewWorkHistory from "./Containers/WorkHistory/ViewWorkHistory"
import UpdateWorkHistory from "./Containers/WorkHistory/UpdateWorkHistory"

import HomeAttendance from "./Containers/Attendance/HomeAttendance"
import AddAttendance from "./Containers/Attendance/AddAttendance"
import ViewAttendance from "./Containers/Attendance/ViewAttendance"
import UpdateAttendance from "./Containers/Attendance/UpdateAttendance"

import EmpMailer from "./Containers/Mailers/EmpMailer"

import HomeLeave from "./Containers/Leaves/HomeLeave"
import AddLeave from "./Containers/Leaves/AddLeave"

import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <>
      <Header/>          
      <Routes>
        
        <Route path='/homeemp' element={<HomeEmp />} />
        <Route path='/registeremp' element={<Register />} />
        <Route path='/editemp/:id' element={<Edit />} />
        <Route path='/empprofile/:id' element={<Profile />} />

        <Route path='/addwork' element={<AddWorkHistory />} />
        <Route path='/workhistory' element={<HomeWorkHistory />} />
        <Route path='/viewworkhistory/:id' element={<ViewWorkHistory />} />
        <Route path='/updateworkhistory/:id' element={<UpdateWorkHistory />} />

        <Route path='/attendance' element={<HomeAttendance />} />
        <Route path='/addattendance' element={<AddAttendance />} />
        <Route path='/viewattendance/:id' element={<ViewAttendance />} />
        <Route path='/updateatt/:id' element={<UpdateAttendance />} />

        <Route path='/empmails' element={<EmpMailer />} />

        <Route path='/addleave' element={<AddLeave />} />
        <Route path='/leave' element={<HomeLeave />} />

      </Routes>
    
      
    </>
  );
}

export default App;