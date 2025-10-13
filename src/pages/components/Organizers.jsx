// src/pages/Organizers.jsx
import React from "react";
import "./Organizers.css";

const organizers = [
  {
    name: "El Saya",
    role: "Fundador & Productor General",
    description:
      "Creador de SayaHalloween, apasionado por Halloween, la música y la cultura geek. Se encarga de la logística, los concursos y la experiencia completa.",
    photo: "/images/organizers/saya.jpg",
  },
  {
    name: "La Guaricha",
    role: "Directora Creativa",
    description:
      "Responsable de la decoración, ambientación y la estética visual del evento. Fanática del cosplay y las manualidades terroríficas.",
    photo: "/images/organizers/guaricha.jpg",
  },
]

const Organizers = () => {
  return (
    <section className="organizers-container" id="organizers">
      <h1 className="organizers-title">Conoce a los Organizadores</h1>
      <p className="organizers-intro">
        El SayaHalloween nació en 2021 como una fiesta de Halloween convencional, y con el
        tiempo se transformó en un evento especial lleno de mucha creatividad,
        concursos, trivias y diversión. Detrás del proyecto somos dos personas que nos encanta lanzar las mejores fiestas de Halloween, amamos la música y diferentes estilos de la cultura pop/geek.
      </p>

      <div className="organizers-list">
        {organizers.map((person, index) => (
          <div key={index} className="organizer-card">
            <img
              src={person.photo}
              alt={person.name}
              className="organizer-photo"
            />
            <h2 className="organizer-name">{person.name}</h2>
            <h3 className="organizer-role">{person.role}</h3>
            <p className="organizer-description">{person.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizers;
