import { useState } from "react";
import axios from "axios";
const getToken = () => localStorage.getItem("token");

export default function ControlLeds() {
  const [bloqueo, setBloqueo] = useState(false);
  const [leds, setLeds] = useState({ led1: false, led2: false, led3: false,bloqueos: bloqueo ? 1 : 0});

  const handleToggle = (ledName) => {
    const token = getToken();
    const newState = { ...leds, [ledName]: !leds[ledName] };
    setLeds(newState);

    axios.post("http://192.168.1.2:8001/api/motion/data/bombillos", newState, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(res => console.log("✅ Enviado:", res.data))
    .catch(err => console.error("❌ Error al enviar:", err));
  };

  return (
    <div>
      <button onClick={() => handleToggle("led1")}>LED 1: {leds.led1 ? "ON" : "OFF"}</button>
      <button onClick={() => handleToggle("led2")}>LED 2: {leds.led2 ? "ON" : "OFF"}</button>
      <button onClick={() => handleToggle("led3")}>LED 3: {leds.led3 ? "ON" : "OFF"}</button>
    </div>
  );
}
