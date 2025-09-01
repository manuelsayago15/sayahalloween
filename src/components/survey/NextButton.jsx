import { useFormStore } from "./store/useFormStore";
const NextButton = ({ questionId }) => {
    const { showIntro, hideShowIntro, nextStep } = useFormStore();
    const answers = useFormStore((state) => state.answers)

    const currentValue = answers[questionId]?.rating || null


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
                className={!showIntro && currentValue === null ? 'disabled-button next-button' : 'next-button'}
                onClick={handleNextStep}
                disabled={!showIntro && currentValue === null}
            >
                Siguiente
            </button>
        </>
    )
}

export default NextButton