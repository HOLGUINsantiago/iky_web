import React, { useState } from "react";
import "./Paiement.css";
import googlePayLogo from "../../../assets/images/logo_paiement/logo_google_pay.png";
import applePayLogo from "../../../assets/images/logo_paiement/apple_pay_logo.png";
import paypalLogo from "../../../assets/images/logo_paiement/pay_pal_logo.png";

const PaymentModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal principale
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Modal de confirmation

  const handleCancel = () => {
    setShowConfirmationModal(true); // Ouvre la modal de confirmation
  };

  const confirmCancel = () => {
    setIsModalOpen(false); // Ferme toutes les modales
    setShowConfirmationModal(false);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false); // Ferme uniquement la modal de confirmation
  };

  if (!isModalOpen) {
    return null; // Si la modal principale est fermée, ne rien afficher
  }

  return (
    <>
      <div
        className={
          showConfirmationModal
            ? "modal-paiement blur-background"
            : "modal-paiement"
        }
      >
        <form className="form-paiement">
          <div className="credit-card-info--form-paiement">
            <div className="input_container-paiement">
              <label className="input_label-paiement">Card Number</label>
              <input
                className="input_field-paiement"
                type="text"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="split-paiement">
              <div className="input_container-paiement">
                <label className="input_label-paiement">Expiry Date</label>
                <input
                  className="input_field-paiement"
                  type="text"
                  placeholder="MM/YY"
                />
              </div>
              <div className="input_container-paiement">
                <label className="input_label-paiement">CVV</label>
                <input
                  className="input_field-paiement"
                  type="number"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
          <button className="purchase--btn-paiement">Pagar</button>
        </form>
        <div className="separator-paiement">
          <div className="line-paiement"></div>
          <p>OR</p>
          <div className="line-paiement"></div>
        </div>
        <div className="payment--options-paiement">
          <button className="payment--options-paiement-google">
            <img src={googlePayLogo} alt="Google Pay" />
          </button>
          <button>
            <img src={applePayLogo} alt="Apple Pay" />
          </button>
          <button>
            <img src={paypalLogo} alt="PayPal" />
          </button>
        </div>
        <button className="cancel--btn-paiement" onClick={handleCancel}>
          Annuler
        </button>
      </div>

      {showConfirmationModal && (
        <div className="confirmation-modal">
          <p>¿Estás seguro de que deseas cancelar la transacción?</p>
          <div className="confirmation-buttons-paiement">
            <button className="confirm--btn-paiement" onClick={confirmCancel}>
              Sí
            </button>
            <button
              className="cancel--btn-confirm-paiement"
              onClick={closeConfirmationModal}
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentModal;
