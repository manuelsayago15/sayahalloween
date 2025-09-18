import { useFormStore } from "./store/useFormStore";
const NextButton = ({ questionId }) => {
    const { showIntro, hideShowIntro, nextStep } = useFormStore();
    const answers = useFormStore((state) => state.answers)
    const emailInputError = useFormStore((state) => state.emailInputError)
    const nameInputError = useFormStore((state) => state.nameInputError)
    // console.log('nameInputError ', nameInputError)
    // console.log('emailInputError ', emailInputError)
    const currentValue = answers[questionId]?.rating || null

    const isDisabled = (!showIntro && currentValue === null || emailInputError || nameInputError)

    const handleNextStep = () => {
        if (showIntro) {
            hideShowIntro()
        } else {
            nextStep()
        }
    }

    return (
        <>
            <button 
                className={isDisabled ? 'disabled-button button' : 'button'}
                onClick={handleNextStep}
                disabled={isDisabled}
            >
                Siguiente
            </button>
        </>
    )
}

export default NextButton