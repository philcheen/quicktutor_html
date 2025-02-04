import React, {useState, useEffect, useRef} from 'react';

function Counter() {
    const [value, setValue] = useState("");
    const refCounter = useRef();
    useEffect(
        function () {
            refCounter.current.focus();
        }
    )
    function change(event) {
        setValue(event.target.value);
    }

    function keydown(event) {
        console.log(event.key);
        if (["Backspace", "Delete", "ArrowLeft", "ArrowRight",
            "Tab"].includes(event.key)) return;
        if (event.key < "0" || event.key > "9") event.preventDefault();
    }

    return (
        <>
            Counter : <input type="text" onChange={change} onKeyDown={keydown} ref={refCounter}/> <br/>
            <br/>
            Input Value : {value}
        </>
    );
}

export default Counter;