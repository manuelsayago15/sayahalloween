import React, { useState } from "react";
import { useFormStore } from '../store/useFormStore'

const Email = () => {
    //const setInputError = useFormStore((state) => state.setInputError)
    const { userInfo, setUserInfo, setEmailInputError } = useFormStore()
    const [error, setError] = useState('')

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return regex.test(value);
    }

    const handleChange = (e) => {
        const inputValue = e.target.value
        setUserInfo('email', inputValue)

        if (inputValue.length > 0 && !validateEmail(inputValue)) {
            setError('Por favor ingresa un correo válido')
            setEmailInputError(true)
        } else {
            setError('')
            setEmailInputError(false)
        }
    }

    return (
        <div className='survey-input-phase-1'>
            <input 
                id='email' 
                type='text' 
                placeholder='sayahalloween@gmail.com' 
                value={userInfo.email}
                onChange={handleChange}
            />
            <p>Deja tus datos si deseas recibir noticias de los próximos eventos.</p>
            { error && <p style={{ color: 'red', fontSize: '0.9rem' }}> {error} </p>}
        </div>
    )
}

export default Email