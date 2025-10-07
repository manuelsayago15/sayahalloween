import React, { useEffect, useRef } from "react";
import "./Itinerary.css";
import Navbar from "../Navbar";
import GalleryPreview from "./GalleryPreview";

const itineraryData = [
  { time: "19:30", title: "Bienvenida y Brindis", icon: "🕯️" },
  { time: "20:00", title: "Sesión de Fotos", icon: "👻" },
  { time: "20:30", title: "Actividades con Premios", icon: "🦇" },
  { time: "22:00", title: "Concurso de disfraces", icon: "🏆" },
  { time: "23:00", title: "Show", icon: "🎶" },
];
const ItineraryView = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // deja de observar para no repetir animación
          }
        });
      },
      { threshold: 0.2 } // 20% del card visible = dispara animación
    ); 

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="itinerary">
        <h2 className="itinerary-title">🕑 Itinerario 🎃</h2>
        <div className="itinerary-list">
          {itineraryData.map((event, index) => (
            <div
              key={index}
              className="itinerary-card hidden"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="itinerary-time">
                {event.icon} {event.time}
              </div>
              <div className="itinerary-text">{event.title}</div>
            </div>
          ))}
        </div>
      </section>
      <GalleryPreview />
    </>
  )
}

export default ItineraryView