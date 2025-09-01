const QuestionTextArea = () => {
    const setAnswer = useFormStore((state) => state.setAnswer)
    const answers = useFormStore((state) => state.answers)
    
    const currentText = answers[questionId]?.text || ''
    
    return (
        <>
            <label htmlFor={`textarea-${questionId}`}>¿Por qué calificas con esa nota?</label>
            <textarea
                id={`textarea-${questionId}`}
                name={`textarea-${questionId}`}
                placeholder="Danos tu opinión..."
                value={currentText}
                onChange={handleChange}
            />
        </>
    )
}

export default QuestionTextArea