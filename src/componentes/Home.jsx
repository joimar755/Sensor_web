import React, { useEffect, useState } from "react";
import TextLinkExample from "./TextLinkExample";
import useAuth from "./hooks/useAuth";
import Lista from "./List/Lista";
import { CardOne } from "./CardOne";
import Example from "./Example";
import Leds from "./Leds";
//import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { auth } = useAuth();
  const [CarCount, setCarCount] = useState(0); 
  const [CarAdd, setCarAdd] = useState([]); 
  const [total, setTotal] = useState(0);

  const calcularTotal = (nuevoCarrito) => {
   // const initialValue = item.price;
    const sumWithInitial = nuevoCarrito.reduce(
      (accumulator, item) => accumulator + item.precio * item.quantity , 0
    );

    setTotal(sumWithInitial);
    console.log(sumWithInitial);
  };

  /* useEffect(() => {
    console.log(total); // Esto se ejecutará cada vez que 'total' cambie
  }, [total]); */

  const handleCarCount = (count) => {
    setCarCount(count); // Actualiza el estado de CarCount
  };


  const handleAddClick = (newCarItem, item) => {
    const itemExists = CarAdd.some((carItem) => carItem.id === newCarItem.id);
    console.log(itemExists)
    let nuevoCarrito;

      if (itemExists) {
       
        nuevoCarrito = CarAdd.map((carItem) =>
          carItem.id === newCarItem.id
            ? { ...carItem, quantity: (carItem.quantity || 0) + 1 } // Asegurarse que quantity tenga un valor numérico
            : carItem
        );
        
      }else{
        nuevoCarrito = [...CarAdd, { ...newCarItem, quantity: 1 }];

      }

    //const nuevoCarrito = [...CarAdd, newCarItem,{ ...item, quantity: 1 }]; // Agrega el nuevo ítem al carrito
    setCarAdd(nuevoCarrito); // Actualiza el estado del carrito
    setCarCount(nuevoCarrito.length); 
    console.log(nuevoCarrito);
    calcularTotal(nuevoCarrito)
  }
  const showAlert = () => { 
    console.log("hola");
   
  }

  return (
    <div>
      <TextLinkExample CarCount={CarCount}  CarAdd={CarAdd} onAddClick={showAlert} total={total}  />
      <h1 className="text-3xl font-bold ">hola {auth.username}</h1>
      <div className="container mx-auto">
        <div className="grid content-around grid-cols-1 gap-4 sm:grid-cols-1 md:gri-cols-3 lg:grid-cols-2 2xl:grid-cols-3 ">
          <Leds />
          
        </div>
      </div>
    </div>
  );
};
export default Home;
