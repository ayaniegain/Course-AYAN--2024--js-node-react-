import React from 'react'
import { useReducer } from 'react';
import { reducer } from './Reducers';

function CounterReducer() {

    const [state, dispatch] = useReducer(reducer, { count: 42 });


  return (
    <>
    <div>CounterReducer {state.count}</div>
    <button onClick={()=>dispatch({type: "inc"})}>Increse</button>
    <button onClick={()=>dispatch({type: "dec"})}>Decrese</button>
    </>
  )
}

export default CounterReducer