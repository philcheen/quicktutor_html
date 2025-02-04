import useFetch from "./useFetch";
import React from 'react';
function Countries() {
    const [data, error] = useFetch("https://outlook.live.com/mail/0/");
    return (
        <>
            { (!error && !data) ? <>Waiting</> :
                (error ? <>{error}</> : <>{data}</>)
            }
        </>
    )
}
export default Countries;