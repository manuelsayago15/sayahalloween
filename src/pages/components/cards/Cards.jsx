import PrizesCard from "./PrizesCard";
import ActivitiesCard from "./ActivitiesCard";
import FaqsCard from "./FaqsCard";
import ItineraryCard from "./ItineraryCard";



const Cards = () => {
  return (
    <section className="cards-section" id="activities">
      <h2>¿Qué te espera?</h2>
      <div className="cards-container">
        <ItineraryCard />
        <ActivitiesCard />
        {/* <PrizesCard /> */}
        <FaqsCard />
      </div>
    </section>
  )
}

export default Cards
