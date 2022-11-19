import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import JobsPage from '../Pages/JobsPage';
import Login from '../Pages/Login';
import Register from '../Pages/Register';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element={<JobsPage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default AllRoutes;