import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,reset,incrementByAmount } from "./counterSlice";
import { useState } from "react";
const Counter = () =>{

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return(
    <section>
        <p>{count}</p>
        <div>
            <Button onClick={()=>dispatch(increment())}>+</Button>
            <Button onClick={()=>dispatch(decrement())}>-</Button>
        </div>
        <input type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
            <Button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</Button>
            <Button onClick={()=>resetAll()}>Reset</Button>
        </div>
    </section>);
}

export default Counter;