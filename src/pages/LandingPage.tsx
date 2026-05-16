import React from 'react';
import CarModelCard from '../components/CarModelCard';

const carModels = [
  {
    image: 'https://via.placeholder.com/300',
    name: 'Model 1',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  {
    image: 'https://via.placeholder.com/300',
    name: 'Model 2',
    features: ['Feature 4', 'Feature 5', 'Feature 6']
  }
];

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Car Models</h1>
      <div className="car-model-cards">
        {carModels.map((carModel, index) => (
          <CarModelCard key={index} image={carModel.image} name={carModel.name} features={carModel.features} />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;