import axios from "axios";
import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8001/"; 

import React from "react";
import CardOne from "../CardOne";
import TextLinkExample from "../TextLinkExample";

export const Lista = ({ onCarCountUpdate, onCarAdd }) => {
  const [Car, setCar] = useState([]);

  const car = async () => {
    try {
      const url = await axios.get(`${URL}/api/motion/data/bombillos`);
      const resultado = url;
      setCar(resultado.data);
    } catch (error) {}
  };

  useEffect(() => {
    car();
  }, []);
  console.log(Car);

  const handleAddClick = (car) => {
    const newCar = {
      id: car.id,
      nombre: car.name_product,
      marca: car.modelo,
      precio: car.price,
      category: car.category,
    };

    onCarAdd(newCar);
  };

  return (
    <>
      {Car.map((carItem) => (
        <CardOne car={carItem} onAddClick={handleAddClick} />
      ))}
    </>
  );
};

export default Lista;
