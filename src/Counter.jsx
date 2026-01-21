// import { useEffect, useState } from "react";
// import CounterActions from "../actions/CounterActions";
// import counterStore from "../stores/CounterStore";

// function Counter() {
 
//  const [count, setCount] = useState(0);
//   useEffect(() => {
//     const onChange = () => {
//       setCount(counterStore.getCount());
//     };

//     // initial load
    
//     counterStore.addChangeListener(onChange);

//     // ✅ cleanup INSIDE useEffect
//     return () => {
//       counterStore.removeChangeListener(onChange);
//     };
//   }, []); // ✅ dependency array

//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       <button onClick={() => CounterActions.increment()}>
//         Increment
//       </button>
//     </div>
//   );
// }

// export default Counter;