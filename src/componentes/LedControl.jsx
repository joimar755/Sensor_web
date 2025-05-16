import { useState, useEffect } from "react";
import axios from "axios";

const getToken = () => localStorage.getItem("token");

function LedControl() {
  const [leds, setLeds] = useState({
    led1: 0,
    led2: 0,
    led3: 0,
    bloqueos: 0
  });
  const [bloqueo, setBloqueo] = useState(false);
  const [intervalo, setIntervalo] = useState(5000);

  const token = getToken();

  // 👉 Esta función la usaremos en el POST y en el intervalo
  const fetchStatus = () => {
    axios
      .get("http://192.168.1.11:8000/api/motion/data/bombillos/status", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setLeds(res.data))
      .catch((err) => console.error("Error al obtener estado:", err));
  };

  useEffect(() => {
    fetchStatus(); // Llamada inicial

    const interval = setInterval(fetchStatus, intervalo);
    return () => clearInterval(interval);
  }, [intervalo]);

  const handleToggle = (ledKey) => {
    const nuevoEstado = {
      ...leds,
      bloqueos: bloqueo ? 1 : 0,
      [ledKey]: leds[ledKey] ? 0 : 1,
    };

    axios
      .post("http://192.168.1.11:8000/api/motion/data/bombillos", nuevoEstado, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("✅ Enviado:", res.data);
        fetchStatus(); // 🔁 Actualizar estado justo después del POST
      })
      .catch((err) => {
        console.error("❌ Error al enviar:", err);
        if (err.response) console.error("Detalles:", err.response.data);
      });
  };

  const cambiarIntervalo = () => {
    setIntervalo(intervalo === 5000 ? 10000 : 5000);
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
      <div className="mt-4">
        <button
          onClick={cambiarIntervalo}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Cambiar Intervalo (Actual: {intervalo / 1000} segundos)
        </button>
      </div>
    </div>
  );
}

export default LedControl;
