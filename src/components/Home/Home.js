import React from 'react';
import Button from '../Button/Button';
import './Home.css';
import food from '../../assets/food.jpg';

function Home() {
  return (
    <section id="home">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
      <Button text="Reserve a Table"/>
      <img src={food} alt="Little Lemon Food"></img>
    </section>
  );
}

export default Home;
