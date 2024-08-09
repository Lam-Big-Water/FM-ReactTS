import shuffle from "lodash.shuffle";
import { FormEvent, useState } from "react";

import { data } from "./Challenge-03-data";
import "./style/challenge-03.scss";

type DogFactType = {
  id: number;
  fact: string;
};

const fetchDogFacts = (n: number) => {
  return Promise.resolve(data).then((facts) => shuffle(facts).slice(0, n));
};

const Challenge = () => {
  const [facts, setFacts] = useState<DogFactType[]>([]);

  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => {
      setFacts(facts);
    })
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} data={facts}/>
    </div>
  );
};

type FormProps = {
  onSubmit: (n: number) => void;
  data: DogFactType[];
};

const Form = ({ onSubmit, data }: FormProps) => {
  const [value, setValue] = useState(1);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form className="form-filed" onSubmit={handleSubmit}>
      <label htmlFor="" className="form-filed--label">
        Number of Dog Facts
      </label>

      <input
        id="number-of-facts"
        className="form-filed--input"
        type="number"
        value={value}
        min="1"
        max="10"
        onChange={(event) => setValue(+event.target.value)}
      />

      <button type="submit" className="form-filed--button">
        <span>Fetch Dog Facts</span>
      </button>

      {data.map((fact, index) => (<Box key={index} fact={fact.fact}/>))}
    </form>
  );
};

const Box = ({fact}: {fact: string}) => {
  return (
    <div className="box">
      <header className="box--title">Dog Fact</header>
      <p className="box--text">
        {fact}
      </p>
    </div>
  );
};

export default Challenge;
