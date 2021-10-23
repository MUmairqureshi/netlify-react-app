import { useState } from 'react'
import { increment, decrement, incrementByamount } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Counterinput = () => {
    const dispatch = useDispatch()
    const [value , setValue]= useState(0)

    const counter = useSelector((state)=> {
        console.log(state)
        return state.counter.count
    })
console.log("value" ,value    )
console.log("increment" , increment()    )
console.log("increment" , decrement()    )
console.log("increment" , incrementByamount() )
    return (
        <div>
            <div>
                <h1> Counter  : {counter}</h1>
            </div>
            <button onClick={() => { dispatch(increment()) }}>  INCREMENT</button>
            <br />
            <button onClick={() => { dispatch(decrement()) }} >DECREMENT</button>
            <br />
            <input type="text" onChange={(e) => {setValue(e.target.value)}} />
            <br />
            <button onClick={() => { dispatch(incrementByamount(Number(value))) }} >INCREMENTByValue</button>
       </div>
        
    )   
}       
