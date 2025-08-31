//import React, { useState } from "react";
import Header from './Header'
import Phase1 from './phase1/Phase1'
import NextButton from './NextButton'
// import PrevButton from './PrevButton'
import { useFormStore } from '../store/useFormStore'
import { questions } from '../questions.json'
import AnswersRating from './phase2/AnswersRating'

const Form = () => {
    let title = 'Sayahalloween'
    const { currentStep, showIntro, answers } = useFormStore();
    const question = questions[currentStep]
    console.log("currentStep " +  currentStep)
    console.log(useFormStore())
    console.log(showIntro)
    console.log('answers ' + answers[currentStep])

    const totalSteps = questions.length

    const progressBar = showIntro ? 0 : ((currentStep + 1) / totalSteps ) * 100
    console.log(progressBar)

    return (
        <>
            <Header title={title} progressBar={progressBar}></Header>
            <section className='section-phase-1'> 
                {showIntro && <Phase1></Phase1>}
                {!showIntro && 
                    <div className='survey-intro'>
                        <h1>{question.text}</h1>
                        <AnswersRating questionId={question.id}></AnswersRating>
                    </div>
                }
            </section>
            <NextButton></NextButton>
            <footer>Copyright © 2025</footer>
        </>
    )
}

export default Form