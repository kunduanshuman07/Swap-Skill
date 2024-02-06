import React from 'react'
import { Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserLayout from "./container/Userlayout";
const RoutesJS = () => {
    return (
        <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/*' element={<UserLayout />} />
        </Routes>
    )
}

export default RoutesJS