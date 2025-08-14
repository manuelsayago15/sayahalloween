const NextButton = () => {
    const handleNextStep = () => {
        console.log("You clicked")
    }

    return (
        <>
            <button className="next-button" onClick={handleNextStep}>Siguiente</button>
        </>
    )
}

export default NextButton