import React, { useState } from "react";

const Email = ({ value, onChange }) => {
    const [error, setError] = useState('')

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }

    const handleChange = (e) => {
        const inputValue = e.target.value
        onChange(inputValue)

        if (inputValue.length > 0 && !validateEmail(inputValue)) {
            setError('Por favor ingresa un correo válido')
        } else {
            setError('')
        }
    }

    return (
        <div className='survey-input-phase-1'>
            <input 
                id='email' 
                type='text' 
                placeholder='sayahalloween@gmail.com' 
                value={value}
                onChange={handleChange}
            />
            <p>Deja tu correo si deseas recibir noticias de los próximos eventos.</p>
            { error && <p style={{ color: 'red', fontSize: '0.9rem' }}> {error} </p>}
        </div>
    )
}

export default Email