// import React from 'react';

export default function JsxC() {
  const aa = ['a', 'b', 'hello'];
  // 方法一: 先 const 下面那段，並 return{ab}
  //   const ab = aa.map((v, i) => {
  //     return <li key={i}>{v}</li>;
  //   });

  //   console.log(ab);

  return (
    <>
      {/* <ul>{ab}</ul> */}

      {/* 方法二: */}
      <ul>
        {aa.map((v, i) => {
          // key 值是必要的，加在 return 時的最外圍元素上
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </>
  );
}
