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
                    <h3>🧛‍♀️ Ya casi! 🎃</h3>
                    <h3>Compra tu entrada ({ticketType})</h3>
                    <p className="modal-text">En Fintoc podrás:</p>
                    <ol className="modal-steps">
                        <li>Copiar los datos y transferir desde tu banco 
                            <em> (no olvides mandar el comprobante por WhatsApp)</em>.
                        </li>
                        <li>Pagar directo con tu banco dentro de Fintoc.</li>
                    </ol>
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
    )
}

export default Modal