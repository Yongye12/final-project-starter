import React, {useState } from "react";



export function AddCount () : JSX.Element{
    const [count,setCount] = useState(0);

    return ( 
        <div>
            Counts: {count}
            <br/>
            <button onClick = {() => setCount(count+1)}> Add Count</button>
        </div>
    );
}