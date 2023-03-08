import React, { useReducer } from 'react'

const initialstate = 0;

const reducer = (state, action) => {
    console.log(state, action);
    switch(action.type){
        case "INCREMENT":
            return state + 1;
            break;
        case "DECREMENT":
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}

function ComA() {

    const [state, dispatch] = useReducer(reducer, initialstate);
    
    return (
        <>
            <h1>{state}</h1>
            <div>
                <button onClick={() => dispatch({type: "INCREMENT"})}> Inc</button>
                <button onClick={() => dispatch({type: "DECREMENT"})}> Dec</button>
            </div>
        </>
    )
}

export default ComA