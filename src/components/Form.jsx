//import React, { useState } from "react";
import Header from './Header'
import Phase1 from './phase1/Phase1'
import NextButton from './NextButton'
import PrevButton from './PrevButton'

const Form = () => {
    let title = 'Sayahalloween'
    //const [currentStep, setCurrentStep] = useState(1)


    return (
        <>
            <Header title={title}></Header>
            <Phase1></Phase1>
            <PrevButton></PrevButton>
            <NextButton></NextButton>
            <footer>Copyright © 2025</footer>
        </>
    )
}

export default Form