import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <nav className="navbar">
            <div className="logo"><Link to="/">SayaHalloween</Link></div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a></li>
                    <li><a href="#tickets" onClick={() => setMenuOpen(false)}>Entradas</a></li>
                    <li><a href="#activities" onClick={() => setMenuOpen(false)}>Actividades</a></li>
                    <li><a href="#faqs" onClick={() => setMenuOpen(false)}>FAQs</a></li>
                </ul>
            <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
        </nav>
    )
}

export default Navbar