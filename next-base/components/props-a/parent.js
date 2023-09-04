import React from 'react';
import Child from './child';
export default function Parent() {
  return (
    <>
      <h1>Parent</h1>
      <Child text={100} price={true} hasNum="hello" />
      <Child text="今天開始學react" price={100} hasNum={true} />
      <Child /> {/* 顯示預設值 */}
    </>
  );
}
