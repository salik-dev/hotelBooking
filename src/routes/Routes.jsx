import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import HotelRental from '../pages/HotelRental';
import CarBooking from '../pages/CarBooking';
import Checkout from '../pages/Checkout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
// import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service-details/:id" element={<ServiceDetails />} />
      <Route path="/hotel-listing" element={<HotelRental />} />
      <Route path="/car-details/:id" element={<CarBooking />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default routes;
