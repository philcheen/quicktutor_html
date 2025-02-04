import React, {useState, useEffect} from 'react';

function Counter(props) {
    const init = props.init;
    const [count, setCount] = useState(init);
    useEffect(function () {
        let timer = setInterval(function () {
            setCount((count)=>count + 1);
            console.log("count=", count);
        }, 1000);
        return function () {
            clearInterval(timer);
        }
    });
    return (
        <>
            Initial value of the counter is: {init}
            <br />
            The counter is: {count}
        </>
    );
}

export default Counter;