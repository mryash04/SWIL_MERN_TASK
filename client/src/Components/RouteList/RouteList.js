import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Home from '../pages/Home/Home';

const RouteList = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default RouteList