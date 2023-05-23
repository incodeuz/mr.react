import React from "react";

const Lesson = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="d-flex align-items-center ">
      <button className="btn btn-primary" onClick={() => increment()}>
        +
      </button>
      <h1 className="m-0 p-0">{count}</h1>
      <button className="btn btn-primary" onClick={() => decrement()}>
        -
      </button>
    </div>
  );
};

export default Lesson;
