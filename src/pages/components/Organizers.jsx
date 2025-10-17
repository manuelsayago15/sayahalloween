// src/pages/Organizers.jsx
import React from "react";
import "./Organizers.css";

const organizers = [
  {
    name: "El Saya",
    role: "Fundador & Productor General",
    description:
      "Creador de SayaHalloween, apasionado por la tecnología, las fiestas, la música, el cosplay y la cultura geek. Se encarga de la logística, los concursos y la experiencia completa del evento.",
    photo: "/images/organizers/saya.jpg",
  },
  {
    name: "La Guaricha",
    role: "Directora Creativa",
    description:
      "Responsable de la decoración, ambientación, logística y la estética visual del evento. Fanática de múltiples géneros musicales, maquillaje, cosplay, cultura geek en general y las manualidades terroríficas.",
    photo: "/images/organizers/guaricha.jpg",
  },
]

const Organizers = () => {
  return (
    <section className="organizers-container" id="organizers">
      <h1 className="organizers-title">Conoce a los Organizadores</h1>
      <p className="organizers-intro">
        El SayaHalloween nació en 2021 como una fiesta de Halloween convencional, y con el
        tiempo se transformó en un evento súper especial lleno de mucha creatividad,
        concursos, trivias y entretenimiento de calidad. Detrás del proyecto somos dos personas que nos encanta lanzar las mejores fiestas ever, amamos la música, diferentes estilos de la cultura pop/geek y, por supuesto, la diversión.
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
