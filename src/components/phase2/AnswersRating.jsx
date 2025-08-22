import { useFormStore } from '../../store/useFormStore'

const AnswersRating = ( { step } ) => {
  const { setAswers } = useFormStore();

  const ratings = Array.from({ length: 10 }, (_, i) => i + 1); // [1,2,3,...,10]

  const handleRating = (value) => {
    setAswers(step, value)
  }
  
  return (
    <div className="rating">
      {ratings.map((num) => (
        <div key={num}>
          <input
            type="radio"
            id={`rating-${num}`}
            name="rating"
            value={num}
            className="rating-input"
            onClick={() => handleRating(num)}
          />
          <label
            htmlFor={`rating-${num}`}
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
