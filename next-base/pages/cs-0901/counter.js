// 純函式範例
import { useState } from 'react';

export default function Counter() {
  // 宣告狀態
  // [getter獲得值的變數, setter設定值的變數]=useState(初始值)
  const [total, setTotal] = useState(0);
  // 用useState定義出一個setTotal方法
  // 改變total值 只能透過setTotal

  let t = 0;

  return (
    <h1
      onClick={() => {
        t += 1;
        console.log(t);
        setTotal(total+1)
      }}
      role="presentation"
    >
      {total}
    </h1>
  );
}

// state狀態:不可更改
// 狀態改變:複製物件>從新的物件更改>放入冰塊
// slide state3
// 時光旅行除錯
// 純函式 vs 非純(依靠函式外變數)
// 副作用 
// ex:會改變傳入參數(物件、陣列)的函式(方法)
// 時間性質的函式，setTimeout等等
// I/O相關
// 資料庫相關
// AJAX

// 屬性:函式傳入職
