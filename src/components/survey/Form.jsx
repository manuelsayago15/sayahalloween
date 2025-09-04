import Header from './header/Header'
import Intro from './intro/Intro'
import NextButton from './NextButton'
import { useFormStore } from './store/useFormStore'
import { questions } from '../../data/questions.json'
import AnswersRating from './questions/AnswersRating'
import TextAreaRating from './questions/TextAreaRating'
import SendSurvey from './sendSurvey'
import Farewell from './Farewell'

const Form = () => {
    let title = 'Sayahalloween'
    const { currentStep, showIntro, answers, isSubmmited } = useFormStore();
    console.log('currentStep ' +  currentStep)
    console.log(useFormStore())
    console.log(showIntro)
    console.log('answers ' + answers[currentStep])
    
    const totalSteps = questions.length
    console.log('totalSteps ', totalSteps)
    
    const progressBar = showIntro ? 0 : ((currentStep + 1) / totalSteps ) * 100
    console.log(progressBar)
    
    // const isLastStep = currentStep >= totalSteps
    // console.log('isLastStep ', + isLastStep)

    const islastQuestion = currentStep === totalSteps - 1
    console.log('islastQuestion ', + islastQuestion)
    
    const question = questions[currentStep]
    console.log('question ', questions[currentStep].text)

    return (
        <>
            <Header title={title} progressBar={progressBar}></Header>
            <section className='section-phase-1'> 
                {showIntro && <Intro />}
                {!showIntro && !isSubmmited && (
                    <>
                        <div className='survey-intro'>
                            <h1>{question.text}</h1>
                            { !islastQuestion && <AnswersRating questionId={question.id}></AnswersRating> }
                        </div>
                    </>
                )}

                { !showIntro && islastQuestion && !isSubmmited && (
                    <div className='textArea' style={{ marginTop: '3rem' }}>
                        <TextAreaRating questionId={question.id} islastQuestion={islastQuestion} /> 
                    </div>
                )}

                { !showIntro && islastQuestion && isSubmmited && (
                    <Farewell /> 
                )}
            </section>
           { !islastQuestion && <NextButton questionId={question.id}></NextButton> }
           { !showIntro && islastQuestion && !isSubmmited && <SendSurvey /> }
            <footer>Copyright © 2025</footer>
        </>
    )
}

export default Form