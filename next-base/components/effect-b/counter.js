import { useEffect, useState } from 'react';

export default function Counter({ count, name }) {
  //   const [total, setTotal] = useState(0);

  //當initCount(屬性)有變化時，就會作一次setTotal
  //   useEffect(() => {
  //     setTotal(initCount);
  //   }, [initCount]);

  //didMount + didUpdate
  useEffect(() => {
    console.log('name改變了', name);
  }, [name]);
  //^^^^^^即使props式物件，由於effect是與re-render相關才會行，所以要理解的是react如何進行re-render

  // didMount + didUpdate
  useEffect(() => {
    console.log('count改變了', count.total);
  }, [count]);

  // didMount + didUpdate
  useEffect(() => {
    console.log('count改變了', count.total);
  }, [count.total]);

  //觀察渲染情況
  console.log('render');

  return (
    <>
      <h1>{count.total}</h1>
      <h2>{name}</h2>
    </>
  );
}
