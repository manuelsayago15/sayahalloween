import { useFormStore } from "./store/useFormStore";
const NextButton = ({ questionId }) => {
    const { showIntro, hideShowIntro, nextStep } = useFormStore();
    const answers = useFormStore((state) => state.answers)
    const inputError = useFormStore((state) => state.inputError)
    console.log('inputError ', inputError)
    const currentValue = answers[questionId]?.rating || null

    const isDisabled = (!showIntro && currentValue === null || inputError)

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
                className={isDisabled ? 'disabled-button next-button' : 'next-button'}
                onClick={handleNextStep}
                disabled={isDisabled}
            >
                Siguiente
            </button>
        </>
    )
}

export default NextButton