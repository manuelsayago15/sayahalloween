//import React, { useState } from "react";
import Name from './Name'
import Email from './Email'
import NextButton from '../NextButton'
import { useState } from 'react'

const Phase1 = () => {
    

    return(
        <>
            <div className='survey-intro'>
                <h1>Cuéntanos tu experiencia del SayaHalloween</h1>
                <p>Como nuestro invitado especial queremos tu opinión del último <strong>Sayahalloween 2024</strong>, para así seguir mejorando en nuestros próximos eventos.</p>
                <p>Gracias por completar este formulario, ¡Nos vemos pronto!</p>
            </div>
            <Name></Name>
            <Email></Email>
            {/* <NextButton></NextButton> */}
        </>
    )
}

export default Phase1