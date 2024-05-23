import React from 'react'
import { useDispatch } from 'react-redux';
import { to_count } from '../state/features/countSlice';
import { useAppSelector } from '../state/store';

const ReduxExample = () => {
    const dispatch = useDispatch(); // Access the dispatch function
    const count = useAppSelector(state => state.count.count); // Access the count state
  
    const handleIncrement = () => {
      dispatch(to_count({mode:"increment"})); // Dispatch an action to increment the count
    };
  
    const handleDecrement = () => {
      dispatch(to_count({mode:"decrement"})); // Dispatch an action to decrement the count
    };
  
    return (
      <div>
        <h2>User Component</h2>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );
}

export default ReduxExample