import { useState } from "react";

const UsestateExampleOne = () => {
  let [score, setScore] = useState(0);
  let [value, setValue] = useState(0);

  const incrementValue = () => {
    setScore(score++)
  };

  const decrementValue = () => {
    setValue(value--);
  }

  return (
    <div className="btn-wrapper">
      <div>
        <label htmlFor="">Increase</label>
        <button className="btn" onClick={incrementValue}>
          {score}
        </button>
      </div>
      <div>
        <label htmlFor="">Decrease</label>
        <button className="btn" onClick={decrementValue}>
          {value}
        </button>
      </div>
    </div>
  );
};
export default UsestateExampleOne;
