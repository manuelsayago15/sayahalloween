import "./Modal.css"
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✖</button>
                    <h3>🧛‍♀️ Ya casi! 🎃</h3>
                    <p>En Fintoc podrás:</p>
                    <p>Copiar los datos y transferir desde tu banco (no olvides mandar el comprobante por WhatsApp). O pagar directo con tu banco dentro de Fintoc. 👉 Si quieres más de una entrada, solo cambia el monto antes de confirmar.</p>
            </div>
        </div>
    )
}

export default Modal