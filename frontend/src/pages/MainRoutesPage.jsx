import React from 'react'
import {Routes,Route} from "react-router-dom"

import RidesbookingPage from './RidesbookingPage/RidesbookingPage'
import HomePage from './Homepage/HomePage'
import { Login } from './USERS/Login'
import { Register } from './USERS/Register'
const MainRoutesPage = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/ride" element={<RidesbookingPage/>}/>
            <Route path="/driver" element={<HomePage/>}/>
            <Route path="/buisness" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutesPage