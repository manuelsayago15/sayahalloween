const Tickets = () => {
    return (
        <section className="tickets" id="tickets">
            <h2>Compra tus Entradas</h2>
            <p>Elige tu tipo de entrada y asegura tu lugar en la fiesta más épica del año.</p>

            <div className="tickets-cards">
                <div className="ticket-card">
                    <h3>Preventa</h3>
                    <p>Acceso al evento, entrada más barata + regalos exclusivos.</p>
                    <a href="#" className="btn-buy-tickets">Comprar Ahora</a>
                </div>
                <div className="ticket-card">
                    <h3>General</h3>
                    <p>Acceso al evento, bebidas y pasapalos incluidos.</p>
                    <a href="#" className="btn-buy-tickets">Comprar Ahora</a>
                </div>
            </div>
        </section>
    )
}

export default Tickets