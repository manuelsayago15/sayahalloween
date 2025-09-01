import React, { useState } from "react";

const Name = ( { value, onChange}) => {
    const [error, SetError] = useState('')

    const handleChange = (e) => {
        const inputValue = e.target.value
        onChange(inputValue)

        if (inputValue.length > 0 && inputValue.length < 3) {
            SetError('El nombre debe tener al menos 3 caracteres.')
        } else {
            SetError('')
        }
    }

    return (
        <div className='survey-input-phase-1'>
            <input 
                id='name' 
                className='name' 
                type='text' 
                placeholder='Drácula Hernández' 
                maxLength={30}
                value={value}
                onChange={handleChange}
            />
            { error && <p style={{ color: 'red', fontSize: '0.9rem' }}> {error} </p> }
        </div>
    )
}

export default Name