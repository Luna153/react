import { useState } from 'react';

export default function Html5Form() {
  // input-text
  const [inputText, setInputText] = useState('');

  //切換密碼文字輸入框，是否呈現
  const [show, setShow] = useState(false);

  // textarea
  const [textareaText, setTextareaText] = useState('');

  // radio group
  const foodOptions = ['三明治', '貝果', '佛卡夏'];
  // food的值為以下四個之一: '三明治'| '貝果'| '佛卡夏' | ''
  // 初始值為空白字串，代表都沒被選中
  const [food, setFood] = useState('');

  // checkbox group
  const fruitOptions = ['西瓜', '芒果'];
  //   初始值為空白陣列，代表都沒被選中
  const [fruits, setFruits] = useState([]);

  //select
  const cityOptions = [
    '台北市',
    '新北市',
    '桃園市',
    '台中市',
    '台南市',
    '高雄市',
  ];
  const [city, setCity] = useState('');
  return (
    <>
      <h1>可控表單元件</h1>
      <section id="input-text">
        <h2>文字輸入框(input text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <h2>密碼輸入框</h2>
        <input
          type={show ? 'text' : 'password'}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? '隱藏' : '呈現'}
        </button>
      </section>
      <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value);
          }}
        />
      </section>
      <section id="radio-group">
        <h2>選項按鈕群組(radio group)</h2>
        {foodOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                // 用值和目前選中的food狀態來比較，決定是否呈現選中的樣子
                checked={food === v}
                // 一樣可以使用value屬性，用e.target.value在事件觸發後得到值
                value={v}
                onChange={(e) => {
                  // 狀態中記錄的是每個選項被選中後的值
                  setFood(e.target.value);
                }}
              />
              {v}
            </label>
          );
        })}
      </section>
      <section id="checkbox-group">
        <h2>核取方塊群組(checkbox-group)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                checked={fruits.includes(v)}
                value={v}
                onChange={(e) => {
                    // 事件觸發時的值
                  const targetValue = e.target.value;

                  // 判斷是否在fruits狀態陣列中
                  if (fruits.includes(targetValue)) {
                    // 如果是 -> 移出陣列
                    // 1 2
                    const newFruits = fruits.filter((v2) => v2 !== targetValue);
                    // 3
                    setFruits(newFruits);
                  } else {
                    // 否則 -> 加入陣列
                    // 1 2 3
                    setFruits([...fruits, targetValue]);
                  }
                }}
              />
              {v}
            </label>
          );
        })}
      </section>
      <section id="select">
        <h2>下拉清單(select)</h2>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
        {/* 初次呈現的選項對應狀態初始值 */}
          <option value="">--請選擇--</option>
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </section>
    </>
  );
}
