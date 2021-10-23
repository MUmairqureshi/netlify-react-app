import React, { useState } from 'react';

import { increment, decrement, incrementByAmount, fetchRandomNumber } from './reducer'
import { useSelector, useDispatch } from 'react-redux'
export function Counter() {

  const dispatch = useDispatch()

  const [value, setValue] = useState(" ")
  const counter = useSelector((state) => {
    console.log(state)
    return state.counter.count
  })
  return (
    <div className="Counter">

      <h1> Counter : {counter} </h1>

      <button onClick={(e) => { dispatch(increment()) }}>Increment</button>

      <button onClick={(e) => { dispatch(decrement()) }} >Derement</button>

      <div>
        <input type="text" onChange={(e) => { setValue(e.target.value) }} />
        <br />

        <button onClick={() => { dispatch(incrementByAmount(Number(value))) }}>  IncrementByAmount</button>
        <br />

        <button onClick={() => { dispatch(fetchRandomNumber()) }}>  FETCHByAmount</button>
      </div>
    </div>
  );
}


