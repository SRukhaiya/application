import AppDispatcher from "../dispatcher/AppDispatcher";

const CounterActions = {
  increment() {
    AppDispatcher.dispatch({
      type: "INCREMENT"
    });
  }
};

export default CounterActions;