import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
function CarModelDetails() {
  const { id } = useParams();
  const [carModel, setCarModel] = useState({} as any);
  useEffect(() => {
    axios.get(`https://example.com/api/car-models/${id}`)
      .then(response => {
        setCarModel(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);
  return (
    <div>
      <h1>{carModel.name}</h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <img src={carModel.image} alt={carModel.name} />
      </motion.div>
      <ul>
        {carModel.features && carModel.features.map((feature: any) => (
          <li key={feature.id}>{feature.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default CarModelDetails;