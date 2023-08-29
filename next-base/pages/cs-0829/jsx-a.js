// rfc
import React from 'react';
// 命名要使用大駝峰
export default function JsxA() {
  return (
    <>
      <h1>JSX中各種值的渲染呈現</h1>
      <h2>Number</h2>
      {123}
      <br />
      {1 + 1}
      <br />
      {NaN}
      <h2>String</h2>
      {'hello'}
      <br />
      {`total=${100 - 1}`}
      <br />
      This is String
      <h2>Boolean(不呈現)</h2>
      {/* 不會被渲染 */}
      {true}
      {false}
      <h2>null/undefined(不呈現)</h2>
      {null}
      {undefined}
      <h2>Array</h2>
      {/* 類似於array.join("") */}
      {[1, 2, 3]}
      {['a', 'b', 'hello']}
      <h2>Object(不能直接渲染)</h2>
      {/* object不是合法的react child */}
      {/* 會造成程式中斷錯誤 */}
      {/* {{a: 1, b: 2}} */}
      <h2>Function(不呈現)</h2>
      {/* 有警告，並非 ReactNode(React Child) */}
      {() => {}}
    </>
  );
}
