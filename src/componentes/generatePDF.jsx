import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import React from 'react';
const generatePDF = (data) => {
    console.log("Datos recibidos en generatePDF:", data); // Asegúrate de que es un array
  
    if (!Array.isArray(data)) {
      console.error("Se esperaba un array, pero se recibió:", typeof data);
      return; // Evita continuar si 'data' no es un array
    }
  
    const doc = new jsPDF();
    doc.text("Reporte de Bombillos", 14, 15);
  
    autoTable(doc, {
      startY: 20,
      head: [['ID', 'LED 1', 'LED 2', 'LED 3', 'Bloqueos']],
      body: data.map(b => [
        b.id,
        b.led1,
        b.led2,
        b.led3,
        b.bloqueos
      ])
    });
  
    doc.save('reporte_bombillos.pdf');
  };
  
  export default generatePDF;
  