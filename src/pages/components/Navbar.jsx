import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <nav className="navbar">
            <div className="logo"><Link to="/">SayaHalloween</Link></div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/#home" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                    <li><Link to="/#tickets" onClick={() => setMenuOpen(false)}>Entradas</Link></li>
                    <li><Link to="/#activities" onClick={() => setMenuOpen(false)}>Actividades</Link></li>
                    <li><Link to="/organizers" onClick={() => setMenuOpen(false)}>Organizadores</Link></li>
                    <li><Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link></li>
                </ul>
            <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
        </nav>
    )
}

export default Navbar