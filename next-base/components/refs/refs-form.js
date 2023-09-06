//使用hooks
import { useRef } from 'react';

export default function RefsForm() {
  // 1.宣告ref給不可控元件使用
  // 初始化值對應document.getElementById，沒獲得元素會回應null
  // 執行後，inputRef = { current:null }
  const inputRef = useRef(null);

  return (
    <>
      <h2>RefsForm</h2>
      {/* 2. 在要使用的表單元素上加上ref (注意ref並非props的成員之一)*/}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // 3.使用時，用inputRef.current可以得到剛定義ref表單元素的實體物件(參照)
          inputRef.current.focus();
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur();
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        獲得值
      </button>
    </>
  );
}
