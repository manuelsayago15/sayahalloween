import Prizes from "./Prizes";
import Activities from "./Activities";
import Faqs from "./Faqs";



const Cards = () => {
  return (
    <section className="cards-section" id="activities">
      <h2>¿Qué te espera?</h2>
      <div className="cards-container">
        <Prizes />
        <Activities />
        <Faqs />
      </div>
    </section>
  )
}

export default Cards
