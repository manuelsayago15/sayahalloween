import Header from './header/Header'
import Phase1 from './intro/Intro'
import NextButton from './NextButton'
import { useFormStore } from './store/useFormStore'
import { questions } from '../../data/questions.json'
import AnswersRating from './questions/AnswersRating'
import TextAreaRating from './questions/TextAreaRating'

const Form = () => {
    let title = 'Sayahalloween'
    const { currentStep, showIntro, answers } = useFormStore();
    console.log('currentStep ' +  currentStep)
    console.log(useFormStore())
    console.log(showIntro)
    console.log('answers ' + answers[currentStep])
    
    const totalSteps = questions.length
    console.log('totalSteps ', totalSteps)
    
    const progressBar = showIntro ? 0 : ((currentStep + 1) / totalSteps ) * 100
    console.log(progressBar)
    
    const isLastStep = currentStep >= totalSteps
    console.log('isLastStep ', + isLastStep)
    
    const question = isLastStep < 1 ? questions[currentStep] : null
    console.log('question ', + question)

    return (
        <>
            <Header title={title} progressBar={progressBar}></Header>
            <section className='section-phase-1'> 
                {showIntro && <Phase1></Phase1>}
                {!showIntro && !isLastStep && (
                    <>
                        <div className='survey-intro'>
                            <h1>{question.text}</h1>
                            <AnswersRating questionId={question.id}></AnswersRating>
                        </div>
                    </>
                )}

                { !showIntro && isLastStep && <TextAreaRating /> }
            </section>
            <NextButton questionId={question.id}></NextButton>
            <footer>Copyright © 2025</footer>
        </>
    )
}

export default Form