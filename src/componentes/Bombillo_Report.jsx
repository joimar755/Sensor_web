import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PDFButton from './PDFButton';
import generatePDF from './generatePDF';
import TextLinkExample from './TextLinkExample';



const Bombillo_Report = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const obtener = async () => {
            const url = await axios.get("http://192.168.1.2:8001/api/motion/data/bombillos");
            const resultado = url;
            setData(resultado.data);
          };
        obtener();
    }, []);
   
     console.log(data);
    return (
      <div>
        <TextLinkExample />
        <h2>Reporte de Bombillos</h2>
        <PDFButton onDownload={() => generatePDF(data)} />   
      </div>
    );
}

export default Bombillo_Report