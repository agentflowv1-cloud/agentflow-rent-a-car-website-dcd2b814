import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Car Booking</h1>
      <p>Book a car now!</p>
      <Link to="/book">Book Now</Link>
    </div>
  );
}

export default Home;