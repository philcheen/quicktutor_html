import React, {useState, useEffect, useRef, useContext, useReducer} from 'react';
import {totalContext} from "./App";
import usePreviousState from "./usePreviousState";

function Counter() {
    const [value, setValue] = useState("");
    const prevValue = usePreviousState(value);

    function change(event) {
        let value = event.target.value;
        setValue(value);
    }

    return (
        <>
            Current Value : <input type="text" onChange={change}/>
            <br/>
            Previous value : {prevValue}
        </>
    )
}

export default Counter;