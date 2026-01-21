import React, { useEffect, useState } from "react";
import CounterStore from "../stores/CounterStore";
import CounterActions from "../actions/CounterActions";
// import dispatcher from "./dispatcher/dispatcher";

function Countering() {
  const [count, setCount] = useState(0);

  useEffect(() => {
   

    const onChange = () => {
      setCount(CounterStore.getCount());

    };

           setCount(CounterStore.getCount());

    CounterStore.addChangeListener(onChange);

    return () => CounterStore.removeChangeListener(onChange);
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => CounterActions.increment()}>
        Increment
      </button>
    </div>
  );
}

export default Countering;