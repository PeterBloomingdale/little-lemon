import { React, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import About from '../About/About';
import Reservations from '../Reservations/Reservations';
import Order from '../Order/Order';
import Login from '../Login/Login';
import ConfirmedBooking from '../ConfirmedBooking/ConfirmedBooking'; // Make sure to correct the path
import { fetchAPI } from '../../util/api.js';

const initialState = fetchAPI(new Date());

function timesReducer(state, action) {
  switch(action.type) {
    case 'UPDATE_TIMES':
      // For now, just return the same available times regardless of the date
      // Later you can modify this logic
      return fetchAPI(action.payload); // action.payload should be the selected date
    default:
      return state;
  }
}


function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, initialState);

  return (
    <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
      </Routes>
    </main>
  );
}

export default Main;
