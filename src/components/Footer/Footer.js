import React from 'react';
import logo from '../../assets/Logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <section className="footer-column-logo">
        <img src={logo} alt="Little Lemon Logo" />
        <p>Little Lemon &copy; 2023</p>
      </section>
      <section className="footer-column">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
        </ul>
      </section>
      <section className="footer-column">
        <h3>Contact</h3>
        <p>Address: 123 Lemon St.</p>
        <p>Phone: (123) 456-7890</p>
      </section>
      <section className="footer-column">
        <h3>Socials</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
