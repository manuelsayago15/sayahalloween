import "./ActivitiesView.css"

const ActivitiesView = () => {
    return (
        <section className="activities-section">
            <h2 className="activities-title">Actividades & Premios 🎭</h2>
            <p className="activities-intro">
                Prepárate para una noche llena de desafíos, juegos y sorpresas. 
                Solo los más rápidos, astutos y atrevidos podrán ganar 🕹️🔥
            </p>

            <div className="activities-grid">
                <div className="activity-card">
                    <h3>🦇💀🧛‍♂️ Concurso de disfraces 🧙‍♀️🧟‍♂️🧝‍♀️ </h3>
                    <p>
                        ¡Participa en el concurso más esperado de la noche! Los disfraces más creativos, 
                        aterradores o cool serán premiados por el jurado del <strong>SayaHalloween</strong>.
                    </p>
                </div>

                <div className="activity-card">
                    <h3>🧠 Verdadero o Falso</h3>
                    <p>
                        Demuestra tus conocimientos sobre cultura general, geek, música, matemática, ciencia y cualquier cosa que se le ocurra al Saya 😄.
                    </p>
                </div>

                <div className="activity-card">
                    <h3>🦇 Carrera de Vampiros</h3>
                    <p>
                        ¿Quién será el vampiro más rápido de la noche? Compite en la carrera para ganar premios.
                    </p>
                </div>

                <div className="activity-card secret">
                    <h3>👻 Actividad sorpresa</h3>
                    <p>Será anunciada durante la fiesta... ¡prepárate para lo inesperado!</p>
                </div>
            </div>

            <div className="prizes-preview">
                <h3>🏆 Premios destacados</h3>
                <ul>
                <li>🥇 Trofeo 1° lugar competencia de disfraces - SayaHalloween 2025</li>
                <li>🎖️ Medallones para el 2° y 3° lugar del concurso de disfraces</li>
                <li>🎁 Premios sorpresa para los más participativos</li>
                </ul>
                <p className="note">*Más premios se revelarán durante la noche*</p>
            </div>
        </section>
    )
}

export default ActivitiesView