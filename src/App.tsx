import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: 'increment' | 'decrement';
}

function reducer (state: State, action: Action) {
  const {type} = action;

  switch (type) {
    case 'increment': {
      const newCount = state.count + 1;
      const hasError = newCount > 5;

      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Maximum reached' : null,
      }
    }

    case 'decrement': {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Minimum reached' : null,
      }
    }
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div className="app">
      <h3>Count: {state.count}</h3>
      {state.error && <div>{state.error}</div>}
      <button onClick={() => dispatch({type: 'increment'})}>increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
    </div>
  )
}

export default App