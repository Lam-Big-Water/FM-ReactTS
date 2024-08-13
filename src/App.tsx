import { useReducer, Dispatch } from "react";

type PizzaData = {
  numberOfPeople: number;
  slicesPerPerson: number;
  slicesPerPie: number;
};

type PizzaState = PizzaData & { pizzasNeeded: number };

const initialState: PizzaState = {
  numberOfPeople: 8,
  slicesPerPerson: 2,
  slicesPerPie: 8,
  pizzasNeeded: 2,
};

const calculatePizzasNeeded = ({
  numberOfPeople,
  slicesPerPerson,
  slicesPerPie,
}: PizzaData): number => {
  return Math.ceil((numberOfPeople * slicesPerPerson) / slicesPerPie);
};



type PizzaAction = {
  type:
    | "UPDATE_NUMBER_OF_PEOPLE"
    | "UPDATE_SLICES_PER_PERSON"
    | "UPDATE_SLICES_PER_PIE";
  payload: number;
};

const reducer = (state: PizzaState, action: PizzaAction) => {
  switch (action.type) {
    case "UPDATE_NUMBER_OF_PEOPLE":
      return addPizzasNeededToPizzaData({
        ...state,
        numberOfPeople: action.payload,
      });
    case "UPDATE_SLICES_PER_PERSON":
      return addPizzasNeededToPizzaData({
        ...state,
        slicesPerPerson: action.payload,
      });
    case "UPDATE_SLICES_PER_PIE":
      return addPizzasNeededToPizzaData({
        ...state,
        slicesPerPie: action.payload,
      });
    default:
      return state;
  }
};

const addPizzasNeededToPizzaData = (data: PizzaData): PizzaState => {
  return { ...data, pizzasNeeded: calculatePizzasNeeded(data) };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <header>
        <h1>Pizza Calculator</h1>
      </header>

      <Calculation count={state.pizzasNeeded} />
      <Calculator state={state} dispatch={dispatch} />
    </main>
  );
};

const Calculation = ({ count }: { count: any }) => {
  return (
    <section>
      <p>{count}</p>
      <p>Pizzas Needed</p>
    </section>
  );
};

const Calculator = ({
  dispatch,
  state,
}: {
  state: PizzaState;
  dispatch: Dispatch<PizzaAction>;
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="">Number of People</label>
      <input
        type="number"
        value={state.numberOfPeople}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_NUMBER_OF_PEOPLE",
            payload: +event.target.value,
          })
        }
      />

      <label htmlFor="">Slice Per Person</label>
      <input
        type="number"
        value={state.slicesPerPerson}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SLICES_PER_PERSON",
            payload: +event.target.value,
          })
        }
      />

      <label htmlFor="">Slices Per Pie</label>
      <input
        type="number"
        value={state.slicesPerPie}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SLICES_PER_PIE",
            payload: +event.target.value,
          })
        }
      />
    </form>
  );
};


export default App;
