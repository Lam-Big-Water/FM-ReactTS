import { useReducer } from "react";

type BasicCounterAction = {
    type: 'INCREMENT' | 'DECREMENT';
}

type SetCounterAction = {
    type: 'SET';
    payload: number;
}

type BetterAction = BasicCounterAction | SetCounterAction;

type CounterState = {
    value: number;
}

const reducer = (state: CounterState, action: BetterAction) => {
    switch (action.type) {
        case "INCREMENT":
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        case 'SET':
            return {value: action.payload};
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, {value: 0});

    const increment = () => dispatch({type: 'INCREMENT'});
    const decrement = () => dispatch({type: 'DECREMENT'});
    const reset = () => dispatch({type: 'SET', payload: 0});
    // const set = (n: number) => dispatch({type: 'SET', payload: n});

    return (
        <div>
            <header>{state.value}</header>

            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;