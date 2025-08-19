import { useFormStore } from "../store/useFormStore";
const NextButton = () => {
    const { showIntro, hideShowIntro, nextStep } = useFormStore();


    const handleNextStep = () => {
        if (showIntro) {
            hideShowIntro()
        } else {
            nextStep()
        }
    }

    return (
        <>
            <button className="next-button" onClick={handleNextStep}>Siguiente</button>
        </>
    )
}

export default NextButton