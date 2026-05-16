import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link to="/car-models/1">Car Model 1</Link></li>
        <li><Link to="/car-models/2">Car Model 2</Link></li>
      </ul>
    </div>
  );
}
export default Home;