import React from "react";
import "./ModalPDF.css"; // Make sure to style the modal appropriately

const ModalPDF = ({ isOpen, onRequestClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-pdf" onClick={onRequestClose}>
      <div className="modal-content-pdf" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-pdf" onClick={onRequestClose}>
          X
        </button>
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="EcoHotel PDF"
        />
      </div>
    </div>
  );
};

export default ModalPDF;
