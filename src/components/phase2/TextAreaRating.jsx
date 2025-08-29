const TextAreaRating = () => {
    return (
        <>
            <label htmlFor="myTextArea">¿Por qué calificas con esa nota?</label>
            <textarea
                id="myTextArea"
                name="test"
                placeholder="Danos tu opinión..."
            />
        </>
    )
}

export default TextAreaRating