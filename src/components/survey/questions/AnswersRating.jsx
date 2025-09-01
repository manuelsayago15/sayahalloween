import { useFormStore } from '../store/useFormStore'
import TextAreaRating from './TextAreaRating';

const AnswersRating = ( { questionId } ) => {
  const setAnswer = useFormStore((state) => state.setAnswer)
  const answers = useFormStore((state) => state.answers)
  const currentValue = answers[questionId]?.rating || null

  const ratings = Array.from({ length: 10 }, (_, i) => i + 1); // [1,2,3,...,10]
  
  console.log("currentValue " + currentValue)
  console.log("questionId " + questionId)
  const handleRating = (value) => {
    console.log("chosen value " + value)
    setAnswer(questionId, { rating: value })
  }

  console.log("answer rating: " + answers[questionId]?.rating)
  
  return (
    <>
      <div className='rating'>
        {ratings.map((num) => (
          <div key={num}>
            <input
              type='radio'
              id={`rating-${questionId}-${num}`}
              name={`rating-${questionId}`}
              value={num}
              className='rating-input'
              checked={currentValue === num}
              onChange={() => handleRating(num)} />
            <label
              htmlFor={`rating-${questionId}-${num}`}
              className='rating-label'
            >
              {num}
            </label>
          </div>
        ))}
      </div>
      { (currentValue !== null && currentValue <= 6) && (
        <div className='textArea'>
          <TextAreaRating questionId={questionId} />
        </div>
      )}
    </>
  );
};

export default AnswersRating;
