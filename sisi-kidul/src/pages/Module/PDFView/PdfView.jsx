import React from "react";
import { Document, Page } from "react-pdf";

function PDFView({ selectedPDF }) {
  return (
    <div>
      <h2>PDF Viewer</h2>
      {selectedPDF && (
        <Document file={selectedPDF.file}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
}

export default PDFView;