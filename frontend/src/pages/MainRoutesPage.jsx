
import React from "react";
import { Routes, Route } from "react-router-dom";
import DriverSignup from "../components/driver/DriverSignup";
import RidesbookingPage from "./RidesbookingPage/RidesbookingPage";
import HomePage from "./Homepage/HomePage";
import { Login } from './USERS/Login'
import { Register } from './USERS/Register'
import Payment from '../components/Payment/Payment'
import DriverLogin from "../components/driver/DriverLogin";

const MainRoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ride" element={<RidesbookingPage />} />
        <Route path="/driver" element={<DriverSignup />} />
        <Route path="/buisness" element={<HomePage />} />
        <Route path="/driverlogin" element={<DriverLogin />} />
          <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>

    </div>
  );
};

export default MainRoutesPage;
