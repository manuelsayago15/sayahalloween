import React, { useState } from "react";
import { useFormStore } from '../store/useFormStore'

const Name = ( { value, onChange}) => {
    const setInputError = useFormStore((state) => state.setInputError)
    const inputError = useFormStore((state) => state.inputError)
    console.log('inputError ', inputError)
    const [error, SetError] = useState('')

    const handleChange = (e) => {
        const inputValue = e.target.value
        onChange(inputValue)

        if (inputValue.length > 0 && inputValue.length < 3) {
            SetError('El nombre debe tener al menos 3 caracteres.')
            setInputError(true)
        } else {
            SetError('')
            setInputError(false)
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