import React from 'react';

export default function UseEffect() {
  const [count, setCount] = React.useState(0);
  const [calculation, setCalculation] = React.useState(0);

  React.useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
  /*
  -> no [] means runs on every render
  -> [] means Only run the effect on the initial render
  -> [count] means if the count variable updates, the effect will run again
  */

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
