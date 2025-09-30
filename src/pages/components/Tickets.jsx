
import { useState } from "react";
import Modal from "./Modal"

const Tickets = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="tickets" id="tickets">
            <h2>Compra tus Entradas</h2>
            <p>Elige tu tipo de entrada y asegura tu lugar en la mejor fiesta de disfraces del año.</p>

            <div className="tickets-cards">
                <div className="ticket-card">
                    <h3>Preventa</h3>
                    <p>Acceso al evento, entrada más barata + regalos exclusivos.</p>
                    <p><strong>$6.000</strong></p>
                    <a className="btn-buy-tickets" onClick={() => setIsOpen(true)}>Comprar Ahora</a>
                </div>
                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
                <div className="ticket-card">
                    <h3>General</h3>
                    <p>Acceso al evento, bebidas y pasapalos incluidos.</p>
                    <p><strong>$8.000</strong></p>
                    <button className="btn-buy-tickets disabled-button" disabled>Comprar Ahora</button>
                </div>
            </div>
        </section>
    )
}

export default Tickets