import React from 'react';
import './CarModelCard.css';

interface CarModelCardProps {
  image: string;
  name: string;
  features: string[];
}

function CarModelCard({ image, name, features }: CarModelCardProps) {
  return (
    <div className="car-model-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarModelCard;