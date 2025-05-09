import React from 'react';

const PDFButton = ({ onDownload }) => {
  console.log("onDownload es tipo:", typeof onDownload); // Debe ser 'function'

  return (
    <button onClick={onDownload}>
      Descargar PDF
    </button>
  );
};

export default PDFButton;
