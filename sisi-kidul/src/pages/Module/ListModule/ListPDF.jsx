
import React from "react";

function ListPDF({ pdfs, onSelectPDF }) {
  return (
    <div>
      <h2>Daftar Module</h2>
      <ul>
        {pdfs.map((pdf, index) => (
          <li key={index} onClick={() => onSelectPDF(pdf)}>
            {pdf.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPDF;
