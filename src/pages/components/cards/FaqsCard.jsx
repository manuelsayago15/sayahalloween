import { Link } from "react-router-dom";
const FaqsCard = () => {
    return (
        <Link to="/faqs" className="cards-link">
            <div className="card">
                <h3>FAQs</h3>
                <p>Resolvemos todas tus dudas antes del evento.</p>
            </div>
        </Link>
    )
}

export default FaqsCard