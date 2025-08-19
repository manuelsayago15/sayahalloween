const AnswersRating = () => {
  const ratings = Array.from({ length: 10 }, (_, i) => i + 1); // [1,2,3,...,10]

  return (
    <div className="rating">
      {ratings.map((num) => (
        <div key={num} style={{ textAlign: "center" }}>
          <input
            type="radio"
            id={`rating-${num}`}
            name="rating"
            value={num}
            className="rating-input"
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
