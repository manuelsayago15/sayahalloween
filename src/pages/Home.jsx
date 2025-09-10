import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <h1>🎃 SayaHalloween 2025 🎃</h1>
            <p>La página está en construcción… ¡pronto podrás explorar todo sobre nuestra fiesta!</p>
            <a href="/survey" className="survey-link">Llena la encuesta del Sayahalloween 2024📝</a>
            <div className="spooky-overlay">
                <span>🕷️</span>
                <span>🦇</span>
                <span>💀</span>
                <span>🕯️</span>
                <span>🎃</span>
            </div>
        </div>
    )
}

export default Home