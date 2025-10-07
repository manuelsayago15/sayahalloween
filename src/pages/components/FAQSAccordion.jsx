import { useState } from "react";
import Navbar from "./Navbar";
//import faqs from './faqs.js'

const faqs = [
  {
    q: "¿Qué incluye la entrada?",
    a: "El valor de la entrada cubre todos los pasapalos, bebidas, snacks y dulces seleccionados a partir de sus respuestas en esta encuesta, además de los premios de cada dinámica, la ambientación tenebrosa y la música en vivo de nuestro DJ. ¡Y puede que haya más sorpresas durante la noche! (por confirmar).",
  },
  {
    q: "No me decido si quiero ir, ¿hasta qué día tengo para comprar entradas?",
    a: "Las entradas son limitadas y estarán disponibles desde el … de octubre hasta el … de octubre. ¡No lo pienses demasiado! Se agotan rápido y después solo te quedará el fomo viendo las fotos.",
  },
  {
    q: "¿Qué pasa si me da pena ir solo?",
    a: "Aquí encontrarás un ambiente increíble, con personas que vienen a disfrutar y pasarla bien. ¡No tengas miedo de salir de tu zona de confort! No te arrepentirás. Y si quieres, también puedes invitar a un amigo.",
  },
  {
    q: "¿A qué hora debo llegar?",
    a: "El evento empieza a las 7:00 pm y termina a las 2:00 am. Tenemos un cronograma de actividades que arranca puntual, así que si no quieres perderte algo en específico, revisa el itinerario (link) y planifica tu llegada.",
  },
  {
    q: "¿Qué debo llevar?",
    a: "Tus ganas de disfrutar, buena energía y tu mejor disfraz. ¡Del resto nos encargamos nosotros!",
  },
  {
    q: "¿Cómo gano premios?",
    a: "Participando en las trivias, juegos y en el concurso de disfraces. Valoramos un espíritu competitivo sano: gente ingeniosa, respetuosa y con ganas de divertirse.",
  },
  {
    q: "¿Es obligatorio participar en las actividades?",
    a: "¡Para nada! La idea es que te diviertas. Puedes elegir en qué actividades participar y simplemente disfrutar del ambiente si prefieres.",
  },
  {
    q: "¿Y si no tengo disfraz?",
    a: "Igual puedes venir. Eso sí, esta es la noche perfecta para dejar volar tu creatividad: aunque sea con una prenda temática o un poco de maquillaje, siempre será bienvenido.",
  },
  {
    q: "¿Cuáles son los criterios de evaluación para el concurso de disfraces?",
    a: "Los disfraces serán evaluados por un jurado según originalidad, creatividad, nivel de detalle y actitud del participante. ¡Queremos ver tu personaje en acción!",
  },
  {
    q: "¿Hay un código de vestimenta o restricciones?",
    a: "Sí. Aunque es Halloween y todo vale en cuanto a creatividad, hay límites: no se permiten armas reales ni réplicas demasiado realistas, ni disfraces que impliquen desnudos o contenido ofensivo. Queremos que sea una fiesta segura y divertida para todos.",
  },
  {
    q: "¿Cuál es la edad mínima para asistir?",
    a: "Este evento es exclusivo para mayores de 18 años.",
  },
];

const FAQSAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="home-container">
      <div className="hero">
      <div className="overlay"></div>
        <div className="faq-accordion hero-content">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
                >
                {faq.q}
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className={`faq-answer-wrapper ${
                  activeIndex === index ? "open" : ""
                }`}
                >
                <p className="faq-answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default FAQSAccordion