import React from 'react';
import logo from '../../assets/Logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>Little Lemon &copy; 2023</p>
      <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
      <section className="footer-column">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          {/* ... other links ... */}
        </ul>
      </section>
      <section className="footer-column">
        <h3>Contact</h3>
        <p>Address: 123 Lemon St.</p>
        <p>Phone: (123) 456-7890</p>
        {/* ... other contact info ... */}
      </section>
      <section className="footer-column">
        <h3>Socials</h3>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        {/* ... other social links ... */}
      </section>
    </footer>
  );
}

export default Footer;
