import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementhandler = () => {
    dispatch(counterActions.increment());
  };
  const increasehandler = () => {
    dispatch(counterActions.increase(7));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
