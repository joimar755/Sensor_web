import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pro } from "../api/Producto";
import useAuth from "./hooks/useAuth";
import TextLinkExample from "./TextLinkExample";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/"; 


 const Register = () => {
  const { auth } = useAuth();
  const [category, setCategory] = useState([]);
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);


  const [form, setForm] = useState({
    name: "",
    placa:"",
    color: "",
    price: "",
    stock:"",
    category_id: "",
    modelo: "",
    status: "",
  });
  const categoria = async () => {
    try {
      const url = await axios.get(
        `${URL}/products/status/category`
      );
      const resultado = url;
      setCategory(resultado.data.resultado);
    } catch (error) {}
  };
  const categoria1 = async () => {
    try {
      const url = await axios.get(
        `${URL}/products/status/model`
      );
      const resultado = url;
      setCategory1(resultado.data.resultado);
    } catch (error) {}
  };
  const categoria2 = async () => {
    try {
      const url = await axios.get(
        `${URL}/products/status`
      );
      const resultado = url;
      setCategory2(resultado.data.resultado);
    } catch (error) {}
  };

  useEffect(() => {
    categoria();
    categoria1();
    categoria2();
  }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(name, placa, color, price, stock, category_id, category_id1, category_id2 );
    if (name.length === 0) {
      alert("Llene campo");
    } else if (price.length === 0) {
      alert("Llene campo");
    } else if (color.length === 0) {
      alert("Llene campo");
    } else {
      try {
        
        const res = await Pro({
            name_product: name, // Ajustar el nombre del campo según lo esperado
            placa,
            color,
            price,
            stock,
            category_id,
            modelo_id: modelo, // Ajustar el nombre del campo según lo esperado
            status_id: status,
        });
        //obtenerUSers();

        // Update the users list with the response data
        const data = res.data;
        console.log(data);
        console.log(res);

        //obtenerUSers();
        //console.log(res.password);
      } catch (error) {
        console.log(error);
      }
        
    }
  };
  const { name, placa, color, price, stock, category_id, modelo, status } = form;


 
  return (
    <>
      <TextLinkExample />
      <h1 className="text-3xl font-bold ">hola {auth.username}</h1>
      <div className="max-w-sm p-6 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
          Crear Producto
        </h5>
        <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="email"
              name="name"
              value={name}
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="nombre"
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
            >
              Placa
            </label>
            <input
              type="text"
              id="password"
              value={placa}
              name="placa"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Color
            </label>
            <input
              type="text"
              value={color}
              name="color"
              id="repeat-password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              onChange={handleChange}
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              precio
            </label>
            <input
              type="number"
              value={price}
              name="price"
              min={0}
              id="repeat-password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              onChange={handleChange}
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Stock
            </label>
            <input
              type="number"
              value={stock}
              name="stock"
              min={0}
              id="repeat-password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              onChange={handleChange}
              required
            />
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Seleccionar Categoria
            </label>
            <select
              onChange={handleChange}
              id="underline_select"
              value={category_id}
              name="category_id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Seleccionar Categoria</option>
              {category.map((elemento, index) => {
                return (
                  <option key={index} value={elemento.id}>
                    {elemento.name}
                  </option>
                );
              })}
            </select>

            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Seleccionar marca
            </label>
            <select
              onChange={handleChange}
              id="underline_select"
              value={status}
              name="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Seleccionar estado</option>
              {category2.map((elemento, index) => {
                return (
                  <option key={index} value={elemento.id}>
                    {elemento.status}
                  </option>
                );
              })}
            </select>

            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Seleccionar modelo
            </label>
            <select
              onChange={handleChange}
              id="underline_select"
              value={modelo}
              name="modelo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Seleccionar modelo</option>
              {category1.map((elemento, index) => {
                return (
                  <option key={index} value={elemento.id}>
                    {elemento.modelo}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;
