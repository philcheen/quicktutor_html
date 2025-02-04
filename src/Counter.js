import React, {useState, useEffect, useRef, useContext, useReducer} from 'react';
import {totalContext} from "./App";

function Counter() {
    const [state, dispatch] = useReducer(function(state, action) {
        if (action.type === "INCR") state.value += action.step;
        if (action.type === "DECR") state.value -= action.step;
        return {...state};
    }, {value:0});
    function incrValue() {
        dispatch({type:"INCR", step:2});
    }
    function decrValue() {
        dispatch({type:"DECR", step:2});
    }
    return (
        <>
            <button onClick={incrValue}>value + 1</button>
            &nbsp;&nbsp;
            <button onClick={decrValue}>value - 1</button>
            &nbsp;
            =>
            value = {state.value};
        </>
    )
}

export default Counter;