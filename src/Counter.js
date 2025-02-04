import React, {useState, useEffect} from 'react';

function Counter({init, end}) {
    init = parseInt(init || 0);
    end = parseInt(end || 0);
    const [count, setCount] = useState(init);
    useEffect(function () {
        if (end && count >= end) return;
        let timer = setInterval(function () {
            setCount((count) => count + 1);
            console.log("count=", count);
        }, 1000);
        return function () {
            clearInterval(timer);
        }
    });
    return (
        <>
            Initial value of the counter is: {init}
            <br/>
            The counter is: {count}
            {
                (end && count >= end) ? <b style={{color:"red", fontsize:"20px"}}>Counter stopped</b>
                    : <i>Counter in progress</i>
            }
        </>
    );
}

export default Counter;