import React from 'react';
import Button from '../Button/Button';
import './Home.css';
import food from '../../assets/food.jpg';
import { useNavigate } from 'react-router-dom'; // import the useHistory hook
import SpecialsMenu from '../SpecialsMenu/SpecialsMenu.jsx';
import "../SpecialsMenu/SpecialsMenu.css";
import Testimonials from '../Testimonials/Testimonials.jsx';
import "../Testimonials/Testimonials.css";


function Home() {
  // Get the navigate function
  const navigate = useNavigate();

  // Define the button click handler
  const navigateToReservations = () => {
    navigate("/reservations");
  }

  return (
    <section id="home">
      <section id="home-primary">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
      <Button ariaLabel="Navigate to reservations page" text="Reserve a Table" onClick={navigateToReservations}/>
      <img src={food} alt="Little Lemon Food"></img>
      </section>
      
      <SpecialsMenu />
      <Testimonials />
    </section>
  );
}

export default Home;
