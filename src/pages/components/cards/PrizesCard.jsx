import { Link } from "react-router-dom";
const PrizesCard = () => {
    return (
      <Link to="/prizes" className="cards-link">
        <div className="card">
          <h3>Premios</h3>
          <p>Trofeos y reconocimientos para los mejores disfraces.</p>
        </div>
      </Link>
    )
}

export default PrizesCard