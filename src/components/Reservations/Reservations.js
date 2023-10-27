import React from 'react';
import './Reservations.css';
import BookingForm from '../BookingForm/BookingForm';

function Reservations({ availableTimes, dispatch }) {

  return (
    <section id="reservations">
      <h2>Book Your Reservation</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default Reservations;
