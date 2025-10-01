import { Link } from "react-router-dom";
const Faqs = () => {
    return (
        <Link to="/faqs" className="faqs-link">
            <div className="card">
                <h3>FAQs</h3>
                <p>Resolvemos todas tus dudas antes del evento.</p>
            </div>
        </Link>
    )
}

export default Faqs