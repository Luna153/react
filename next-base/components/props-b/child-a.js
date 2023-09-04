import React from 'react';

export default function ChildA({ dataFromChild }) {
  return (
    <>
      <h1>ChildA</h1>
      <p>來自ChildB元件的資料: {dataFromChild}</p>
      {/* C->C 子傳子 */}
      {/* 接收Parent傳遞資料 */}
    </>
  );
}
// 使用useState的時機?都有

