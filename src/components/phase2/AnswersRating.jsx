const AnswersRating = () => {

    return (
        <>
            <div>
                <input type="radio" id="rating-1" name="rating" value={1}/>
                <label htmlFor="rating-1">1</label>
            </div>
            <div>
                <input type="radio" id="rating-2" name="rating" value={7}/>
                <label htmlFor="rating-2">2</label>
            </div>
            <div>
                <input type="radio" id="rating-3" name="rating" value={3}/>
                <label htmlFor="rating-3">3</label>
            </div>
            <div>
                <input type="radio" id="rating-4" name="rating" value={4}/>
                <label htmlFor="rating-4">4</label>
            </div>
            <div>
                <input type="radio" id="rating-5" name="rating" value={5}/>
                <label htmlFor="rating-5">5</label>
            </div>
            <div>
                <input type="radio" id="rating-6" name="rating" value={6}/>
                <label htmlFor="rating-6">6</label>
            </div>
            <div>
                <input type="radio" id="rating-7" name="rating" value={7}/>
                <label htmlFor="rating-7">7</label>
            </div>
            <div>
                <input type="radio" id="rating-8" name="rating" value={8}/>
                <label htmlFor="rating-8">8</label>
            </div>
        </>
    )
}

export default AnswersRating