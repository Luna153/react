import { useState } from 'react';

export default function NoteIndex() {
  //input輸入框使用狀態
  const [inputValue, setInputValue] = useState('');

  //建立物件
  const [todos, setTodos] = useState([
    //預設內容
    {
      id: 1,
      text: '買牛奶',
      completed: true,
    },
    {
      id: 2,
      text: '學react',
      completed: false,
    },
    {
      id: 3,
      text: '打慕朵',
      completed: true,
    },
  ]);

  //新增todo list內容
  const add = (todos, text) => {
    //將物件內屬性為id的值，傳到ids成為新的陣列
    const ids = todos.map((v) => v.id);
    // 從ids中找出最大值
    const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1;
    // text?
    const newTodo = { id: newId, text: text };
    return [newTodo, ...todos];
  };
  //   ----------------------------------------
  const handleAdd = (text) => {
    setTodos(add(todos, text));
  };
  //   ----------------------------------------
  //顯示內容return
  return (
    <>
      {/* input輸入框 */}
      <input
        type="text"
        value={inputValue}
        //未設定onChange無法在input輸入文字
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          //設定鍵盤事件，Enter要大寫
          if (e.key === 'Enter') {
            //enter完要新增內容
            handleAdd(e.target.value);
            // enter完要清空input內容
            setInputValue('');
          }
        }}
      />
      {/* list */}
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={v.id}>
              <input type="checkbox" />
              {v.text}
            </li>
          );
        })}
      </ul>
    </>
  );
}
