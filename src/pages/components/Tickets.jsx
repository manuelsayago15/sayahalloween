
import { useState } from "react";
import Modal from "./modal/Modal"

const Tickets = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [ticketType, setTicketType] = useState(null)

    const handleModalTicket = (type) => {
        setTicketType(type)
        setIsOpen(true)
    }

    return (
        <section className="tickets" id="tickets">
            <h2>Compra tus Entradas</h2>
            <p className="tickets-text">Elige tu tipo de entrada y asegura tu lugar en la mejor fiesta de disfraces del año</p>

            <div className="tickets-cards">
                <div className="ticket-card">
                    <h3>Preventa</h3>
                    <p>Acceso al evento + regalos exclusivos</p>
                    <p><strong>$6.000</strong></p>
                    <button className="btn-buy-tickets" onClick={() => handleModalTicket("preventa")}>Comprar Ahora</button>
                </div>
                <div className="ticket-card">
                    <h3>General</h3>
                    <p>Acceso al evento</p>
                    <p><strong>$8.000</strong></p>
                    <button className="btn-buy-tickets disabled-buy-button" disabled onClick={() => handleModalTicket("general")}>No disponible</button>
                </div>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} ticketType={ticketType}/>
            </div>
        </section>
    )
}

export default Tickets