import { ChangeEvent, useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [inputV, setInputV] = useState(0);

    const addDouble = () => setCount(count * 2);

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => setInputV(Number(event.target.value));
    const handleSubmit = () => {
        event?.preventDefault();
        setCount(inputV);
    }
    return (
        <div>
            <header>{count}</header>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={addDouble}>Double</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <p>Set Count</p>
            <input type="number" onChange={handleInput}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Counter;