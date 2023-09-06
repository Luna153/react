import { useState } from 'react';

export default function AddForm({ handleAdd }) {
  //  可控表單元素，宣告專門給文字輸入框使用的狀態
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        type="text"
        // 可控表單元件: value聯結到某狀態
        value={inputValue}
        // 可控表單元件: onChange事件能更動到那個連結的狀態
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // 新增項目到todos狀態中
            handleAdd(e.target.value);

            // 清空文字輸入框
            setInputValue('');
          }
        }}
      />
    </>
  );
}
