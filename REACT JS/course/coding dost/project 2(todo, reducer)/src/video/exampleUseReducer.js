import React from 'react';
import { useReducer } from 'react';
export function App() {
  function reducer(initialState, action) {
    console.log('init', initialState); 
    console.log('action', action);
    if (action.type === 'inc') {return { age: +initialState.age + 1,payload:action.payload };}
    if (action.type === 'dec') {return { age: +initialState.age - 1,payload:action.payload };}}
const [state, dispatch] = useReducer(reducer, { age: 21 });

  console.log("state",state);

  return (
    <div className='App'>
      <h1>Hello React. {state.age} </h1>
      <h1>Hello React. {state.payload} </h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => dispatch({ type: 'inc' ,payload:"inc value" })}>increment</button>
      <button onClick={() => dispatch({ type: 'dec',payload:"dec value" })}>decrement</button>
    </div>
  );
}
