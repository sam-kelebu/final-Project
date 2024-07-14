// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/Logo.jpg'
function Navigation() {
  return (
    <nav className="fixed bg-[#01855E] text-white py-4 overflow-x-hidden w-full h-auto z-50 top-0 left-0 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={LogoImage}  alt="Logo" className="h-[10vh] mr-4 rounded-lg" />
          </Link>
          
        </div>
        <div>
          <Link to="/destination" className="px-4 hover:text-gray-400">
            Destination
          </Link>
          <Link to="/booking" className="px-4 hover:text-gray-400">
            Booking
          </Link>
          <Link to="/hotel" className="px-4 hover:text-gray-400">
            Hotel
          </Link>
          <Link to="/signup" className="px-4 hover:text-gray-400">
            Sign Up
          </Link>
          <Link to="/login" className="px-4 hover:text-gray-400">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;