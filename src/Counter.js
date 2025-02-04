import React, {useState, useEffect, useRef} from 'react';

function Counter({setTotal, focus}) {
    const [value, setValue] = useState("");
    const refCounter = useRef();
    useEffect(
        function () {
            if (focus) refCounter.current.focus();
        }
    ,[]);
    function change(event) {
        const newValue = parseInt(event.target.value||0);
        setValue(newValue);
        setTotal((total)=>(total-value));
        setTotal((total)=>(total+newValue));
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