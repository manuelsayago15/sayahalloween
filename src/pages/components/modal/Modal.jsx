import "./Modal.css"

const Modal = ({ isOpen, onClose, ticketType }) => {
    if (!isOpen) return null;

    const links = {
        preventa: "https://fintoc.me/sayahalloween/6000",
        general: "https://fintoc.me/sayahalloween/8000"
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✖</button>
                
                <h3>Compra tu entrada ({ticketType})</h3>

                <div className="modal-steps">
                    <p className="modal-intro">
                        Al entrar al link tendrás <strong>dos formas de pagar</strong>.  
                        Escoge la que te resulte más cómoda:
                    </p>

                    <div className="payment-options">
                        <div className="payment-card">
                            <h4>💳 Opción 1</h4>
                            <p>
                                Copia los datos de la cuenta y haz la transferencia directamente desde tu banco.  
                                <em> (No olvides enviar el comprobante por WhatsApp)</em>.
                            </p>
                        </div>

                        <div className="payment-card">
                            <h4>🏦 Opción 2</h4>
                            <p>
                                Paga directamente con tu banco desde la plataforma  
                                <strong> Fintoc</strong> (todo dentro del mismo enlace).
                            </p>
                        </div>
                    </div>
                </div>

                <p className="modal-text">
                    👉 Si quieres más de una entrada, solo cambia el monto antes de confirmar.
                </p>

                <a
                    href={links[ticketType]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-buy-tickets"
                >
                    Ir a pagar
                </a>
            </div>
        </div>
    );
};

export default Modal;
