// (if 判斷)falsy:
// false、+0、-0、NaN、null、undefined

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <hr />
      {/* click 之前不會出現 0 => 讓判斷式一定要計算出 Boolean 值*/}
      {/* 方法一 */}
      {Boolean(count) && <h1>Messages: {count}</h1>}
      {/* 方法二 */}
      {!!count && <h1>Messages: {count}</h1>}
      {/* 方法三 */}
      {count !== 0 && <h1>Messages: {count}</h1>}
      {/* 方法四 */}
      {count > 0 && <h1>Messages: {count}</h1>}
    </div>
  );
}
