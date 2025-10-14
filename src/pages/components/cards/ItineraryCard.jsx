import { Link } from "react-router-dom";
const ItineraryCard = () => {
    return (
        <Link to="/itinerary" className="cards-link">
        <div className="card">
          <h3>Itinerario</h3>
          <p>Horario de las actividades y eventos de la noche</p>
        </div>
      </Link>
    )
}

export default ItineraryCard