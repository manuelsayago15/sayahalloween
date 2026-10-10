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
                    <h3>💀 Concurso de disfraces</h3>
                    <p>
                        ¡Participa en el concurso más esperado de la noche! Los disfraces más creativos, 
                        aterradores o cool serán premiados por el jurado del <strong>SayaHalloween</strong>.
                    </p>
                </div>

                <div className="activity-card">
                    <h3>🧠 Verdadero o Falso/Trivia</h3>
                    <p>
                        Demuestra tus conocimientos sobre cultura general, geek, música, matemática, ciencia y cualquier cosa que se le ocurra al Saya 😄.
                    </p>
                </div>

                <div className="activity-card">
                    <h3>🦇 Búsqueda del cofre maldito</h3>
                    <p>
                        ¿Quién descubrirá los secretos de la noche?
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
                <li>🥇 Trofeo 1° lugar competencia de disfraces</li>
                <li>🎖️ Medallones para el 2° y 3° lugar del concurso de disfraces</li>
                <li>🎁 Premios sorpresa para los más participativos</li>
                </ul>
                <p className="note">*Más premios se revelarán durante la noche*</p>
            </div>

            <div className="contest-rules">
                <h3> 🎭 Bases del Concurso de Disfraces </h3>
                <ul>
                    <li>¡Demuestra tu lado más oscuro, creativo o divertido! 💀✨ Cada participante deberá interpretar a su personaje en una presentación de máximo <strong>1 min</strong>.</li>
                    <li>Puedes incluir música de fondo (previa coordinación con los organizadores) y realizar una breve actuación, por ejemplo, 🎙️ recitar un poema, texto, 💃 bailar, o simplemente encarnar la esencia de tu personaje.</li>
                    <li>
                        El jurado evaluará tres aspectos:
                        <ol>
                            <li>
                                🧵 <strong>Diseño y elaboración del disfraz</strong>
                            </li>
                            <li>
                                🕺 <strong>Performance (actitud, energía y coherencia con el personaje)</strong>
                            </li>
                            <li>
                                👁️ <strong>Presencia escénica</strong>
                            </li>
                        </ol>
                    </li>
                    <li>Cada categoría será evaluada minuciosamente</li>
                    <li>Al finalizar, se sumarán los puntajes para determinar a los ganadores. 🏆</li>
                    <li>Este año el AURA puede ser determinante 😉</li>
                </ul>
            </div>
        </section>
    )
}

export default ActivitiesView