import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action)=>{
    if(action.type === "INCREMENT"){
        return state + 1;
    }
    if(action.type === "DECREMENT"){
        return state - 1;
    }
}

export default function Increment() {
    const[state, dispatch] = useReducer(reducer, initialState)
  return (
   <>
    <div className='box'>
        <p>{state}</p>
    <button type='submit' onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
    <button type='submit' onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>

    </div>
   </>
  )
}
