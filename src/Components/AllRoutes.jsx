import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import JobsPage from '../Pages/JobsPage';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element={<JobsPage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default AllRoutes;