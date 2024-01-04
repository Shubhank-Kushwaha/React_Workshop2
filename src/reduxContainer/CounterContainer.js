import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {decrementCount, incrementCount} from "./CountAction";

function CounterContainer()
{
    const countValue = useSelector((state)=> state.count);
    const dispatchActions = useDispatch();

    return(
        <div>
            <h1>counterContainer</h1>
            <h2>count: {countValue}</h2>
            <button onClick={ ()=> dispatchActions(incrementCount())}>Increment Counter</button>
            <button onClick={()=> dispatchActions(decrementCount())}>Decrement Counter</button>
        </div>
    );
}

export default CounterContainer