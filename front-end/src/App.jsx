// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Component/Nav';
import Destination from './pages/Destination';
import Booking from './pages/Booking';
import Hotel from './pages/Hotel';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import HomePage from './Homes/Home'

function App() {
  return (
    <Router>
  <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;