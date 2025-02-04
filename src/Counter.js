import React, {useState, useEffect} from 'react';

function Counter({init, end, autostart}) {
    init = parseInt(init || 0);
    end = parseInt(end || 0);
    autostart = parseInt(autostart || 0);

    const [count, setCount] = useState(init);
    const [start, setStart] = useState(true);

    function increase() {
        setCount((count) => count + 1);
    };
    useEffect(function () {
        if (autostart) restart();
    },autostart);
    useEffect(function () {
        if (!start) {
            let timer = setInterval(function () {
                setCount((count) => {
                    let newCount = count + 1;
                    if (newCount >= end) setStart(true);
                    return newCount;
                });
            }, 1000);
            return function () {
                clearInterval(timer);
            }
        }
    });


    function restart() {
        setStart(false);
        setCount(init);
    }
    return (
        <>
            Initial value of the counter is: {init}
            <br/>
            End of the counter at: {end}
            <br/>
            The counter is: {count}
            <br/>
            {
                (start) ?
                    <>
                        <b>Counter stopped</b>&nbsp;
                        <button onClick={restart}>Start</button>
                    </> :
                    <i>Counter in progress</i>
            }
        </>
    );
}

export default Counter;