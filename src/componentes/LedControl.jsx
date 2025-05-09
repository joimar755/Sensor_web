// LedControl.jsx
import { useState, useEffect } from "react";
import axios from "axios";

function LedControl() {
  const [leds, setLeds] = useState({
    led1: false,
    led2: false,
    led3: false
  });

  // Obtener el estado inicial al cargar
  useEffect(() => {
    axios.get("http://192.168.1.11:8001/api/motion/data/estado")
      .then(res => setLeds(res.data))
      .catch(err => console.error("Error al obtener estado:", err));
  }, []);

  const handleToggle = (ledKey) => {
    const nuevoEstado = { ...leds, [ledKey]: !leds[ledKey] };

    axios.post("http://192.168.1.11:8001/api/motion/data/estado", nuevoEstado)
      .then(res => setLeds(res.data.estado))
      .catch(err => console.error("Error al actualizar estado:", err));
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Control de LEDs</h2>
      <div className="space-y-2">
        {["led1", "led2", "led3"].map((led) => (
          <div key={led}>
            <span className="mr-2">{led.toUpperCase()}</span>
            <button
              onClick={() => handleToggle(led)}
              className={`px-4 py-2 rounded ${
                leds[led] ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              {leds[led] ? "Encendido" : "Apagado"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LedControl;
