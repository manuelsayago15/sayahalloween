import { useFormStore } from "../store/useFormStore"

const TextAreaRating = ({ questionId, islastQuestion }) => {
    const setAnswer = useFormStore((state) => state.setAnswer)
    const answers = useFormStore((state) => state.answers)

    const currentText = answers[questionId]?.text || ''
    //console.log('currentText', currentText)
    //console.log('questionId', questionId)

    const handleChange = (e) => {
        const value = e.target.value;
        setAnswer(questionId, { text: value });
    }

    return (
        <>
            <label htmlFor={`textarea-${questionId}`}>{ !islastQuestion ? '¿Por qué calificas con esa nota?' : ''}</label>
            <textarea
                id={`textarea-${questionId}`}
                name={`textarea-${questionId}`}
                placeholder='Danos tu opinión...'
                value={currentText}
                onChange={handleChange}
            />
        </>
    )
}

export default TextAreaRating