import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  }

  if (action.type === "decrement") {
    return state - 1;
  }
};

function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return <>

<div>{state}</div>

  <button onClick={()=>{
    dispatch({type:"increment"})
  }}>up</button>

  <button onClick={()=>{
    dispatch({type:"decrement"})
  }}> Down</button>
  
  
  </>
}

export default Reducer;
