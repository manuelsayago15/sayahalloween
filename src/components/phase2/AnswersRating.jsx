import { useFormStore } from '../../store/useFormStore'

const AnswersRating = ( { step } ) => {
  const setAnswer = useFormStore((state) => state.setAnswer);
  const answers = useFormStore((state) => state.answers);
  const currentValue = answers[step] || null;

  const ratings = Array.from({ length: 10 }, (_, i) => i + 1); // [1,2,3,...,10]
  
  console.log("currentValue " + currentValue)
  console.log("step " + step)
  const handleRating = (value) => {
    console.log("chosen value " + value)
    setAnswer(step, value)
  }

  console.log("answer: " + answers[step])
  
  return (
    <div className="rating">
      {ratings.map((num) => (
        <div key={num}>
          <input
            type="radio"
            id={`rating-${step}-${num}`}
            name={`rating-${step}`}
            value={num}
            className="rating-input"
            checked={currentValue === num}
            onChange={() => handleRating(num)}
          />
          <label
            htmlFor={`rating-${step}-${num}`}
            className="rating-label"
          >
            {num}
          </label>
        </div>
      ))}
    </div>
  );
};

export default AnswersRating;
