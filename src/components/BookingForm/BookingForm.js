import React, { useState } from 'react';
import { submitAPI } from '../../util/api.js';
import { useNavigate } from 'react-router-dom';


function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const navigate = useNavigate();  // <-- Call useNavigate here

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

     // Add your client-side validation logic here
     if(formData.date && formData.guests > 0 && formData.guests <= 10) {
          setIsValid(true);
      } else {
          setIsValid(false);
      }

    if (name === "date") {
        dispatch({ type: 'UPDATE_TIMES', payload: new Date(value) });
    }
  };

  const handleSubmit = async (e) => {  // <-- Mark this as async
    e.preventDefault();

    // Call the submitAPI function
    const response = await submitAPI(formData);

    if(response) {
        // If response is true, navigate to booking-confirmed page
        navigate('/booking-confirmed');
    } else {
        // Handle failed submission
        alert("Booking Failed!");
    }
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="time" value={formData.time || ""} onChange={handleChange}>
            <option value="" disabled selected>Select Time</option>
            {availableTimes.map((time, index) => (
                <option key={index} value={time} data-testid="time-option">{time}</option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="10 guests max"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="" className="placeholder-option" disabled selected>Select Occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        </select>

        <input
          type="submit"
          value="Book Reservation"
          disabled={!isValid} // This will disable the button if the form is invalid
        />
    </form>
  );
}

export default BookingForm;
