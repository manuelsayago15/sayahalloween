import { useState, useEffect } from "react";

const Farewell = () => {
    const [elements, setElements] = useState([]);
    
    useEffect(() => {

        const avatars = [
            "/images/bat.png",
            "/images/spider.png",
            "/images/pumpkin.png",
            "/images/skull.png",
            "/images/witch.png",
        ]

        // avatars.forEach((src) => {
        //     const img = new Image()
        //     img.src = src
        // })

        const interval = setInterval(() => {
        setElements((prev) => [
            ...prev,
            {
            id: Date.now(),
            src: avatars[Math.floor(Math.random() * avatars.length)],
            left: Math.random() * 100,
            size: 40 + Math.random() * 60,
            duration: 4 + Math.random() * 3, 
            },
        ]);
        }, 100);

        setTimeout(() => clearInterval(interval), 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>  
            <div className="farewell">
                <p>Muchas gracias por tu tiempo, tu opinión es muy valiosa para nosotros</p>
            </div>

            <div className="flying-overlay">
                {elements.map((e) => (
                    <img
                    key={e.id}
                    src={e.src}
                    className="flying-images"
                    style={{
                        left: `${e.left}%`,
                        width: `${e.size}px`,
                        animationDuration: `${e.duration}s`,
                    }}
                    />
                ))}
            </div>
        </>
    )
}

export default Farewell