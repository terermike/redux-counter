import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { isAction } from "redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementhandler = () => {
    dispatch({ type: "increment" });
  };
  const increasehandler = () => {
    dispatch({ type: "increase", amount: 7 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={increasehandler}>IncrementBy7</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
