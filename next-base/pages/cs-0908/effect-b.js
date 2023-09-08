import { useState } from 'react';
import Counter from '@/components/effect-b/counter';

export default function EffectB() {
  const [count, setCount] = useState({ total: 1 });
  const [name, setName] = useState('Iris');
  return (
    <>
      <h1>useEffect基本範例</h1>
      <Counter name={name} count={count} />
      <button
        onClick={() => {
          setCount({ total: count.total + 1 });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount({ total: 10 });
        }}
      >
        =10
      </button>
      <hr />
      <button
        onClick={() => {
          setName('Nike');
        }}
      >
        改name為Nike
      </button>
      <button
        onClick={() => {
          setName('Iris');
        }}
      >
        改name為Iris
      </button>
    </>
  );
}
