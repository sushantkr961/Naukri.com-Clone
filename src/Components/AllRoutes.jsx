import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import JobsPage from '../Pages/JobsPage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element={<JobsPage />}/>
    </Routes>
  )
}

export default AllRoutes;