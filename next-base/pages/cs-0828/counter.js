// react不使用html寫介面
// 使用jsx=>下面 return() 裡面那段

// 導入 react 中的使用狀態勾子

import { useState } from 'react';

export default function Counter() {
  // 宣告狀態
  // [getter獲得值的變數, setter設定值的變數]=useState(初始值)
  const [total, setTotal] = useState(0);

  // let t = 0;

  // 人造事件
  return (
    <h1
      onClick={() => {
        setTotal(total + 1);
        // t+=1
        // console.log(t)
      }}
      //解決紅線方法一
      role="presentation"
    >
      {total}
    </h1>
  );
}
