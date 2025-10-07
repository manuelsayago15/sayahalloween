import { Link } from "react-router-dom";
const ActivitiesCard = () => {
    return (
      <Link to="/activities" className="cards-link">
        <div className="card">
          <h3>Actividades</h3>
          <p>Concursos, trivias y eventos sorpresa toda la noche.</p>
        </div>
      </Link>
    )
}

export default ActivitiesCard