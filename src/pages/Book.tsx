import React, { useState } from 'react';
import { mockAxiosPost } from '../utils/mocks';

function Book() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carType, setCarType] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const booking = {
      name,
      email,
      phone,
      carType,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      dropoffDate
    };
    mockAxiosPost('/api/booking', booking)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Book a Car</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <br />
        <label>
          Car Type:
          <select value={carType} onChange={(event) => setCarType(event.target.value)}>
            <option value="">Select Car Type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
          </select>
        </label>
        <br />
        <label>
          Pickup Location:
          <input type="text" value={pickupLocation} onChange={(event) => setPickupLocation(event.target.value)} />
        </label>
        <br />
        <label>
          Dropoff Location:
          <input type="text" value={dropoffLocation} onChange={(event) => setDropoffLocation(event.target.value)} />
        </label>
        <br />
        <label>
          Pickup Date:
          <input type="date" value={pickupDate} onChange={(event) => setPickupDate(event.target.value)} />
        </label>
        <br />
        <label>
          Dropoff Date:
          <input type="date" value={dropoffDate} onChange={(event) => setDropoffDate(event.target.value)} />
        </label>
        <br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
export default Book;