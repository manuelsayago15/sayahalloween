import { Link } from "react-router-dom";
import FAQSAccordion from "./FAQSAccordion";



const Cards = () => {
  return (
    <section className="cards-section" id="activities">
      <h2>¿Qué te espera?</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Premios</h3>
          <p>Trofeos y reconocimientos para los mejores disfraces.</p>
        </div>
        <div className="card">
          <h3>Actividades</h3>
          <p>Concursos, trivias y eventos sorpresa toda la noche.</p>
        </div>
        <Link to="/faqs" className="faqs-link">
            <div className="card">
                <h3>FAQs</h3>
                <p>Resolvemos todas tus dudas antes del evento.</p>
            </div>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
