import React, {useEffect,useState} from "react";

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h1>Use Effect Hook Practice</h1>
            <h2>Count: {count}</h2>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseEffect;
