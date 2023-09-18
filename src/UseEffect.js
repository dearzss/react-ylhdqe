import React from 'react';

export default function UseEffect() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  /*
  -> no [] means runs on every render
  -> [] means Only run the effect on the initial render

  */

  return <h1>I've rendered {count} times!</h1>;
}
