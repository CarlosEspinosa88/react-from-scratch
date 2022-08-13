import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add one</button>
      <div role="counter-info">Count is {count}</div>;
    </div>
  );
}
