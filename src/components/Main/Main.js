import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import About from '../About/About';
import Reservations from '../Reservations/Reservations';
import Order from '../Order/Order';
import Login from '../Login/Login';

function Main() {
  return (
    <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
      </Routes>
    </main>
  );
}

export default Main;
