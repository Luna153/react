import { useState } from 'react';
//引入style檔案
import styles from './note.module.css';

export default function NoteIndex() {
  //全選使用狀態
  //藉由e.target確認是true/false
  // const [selected, setSelectAll] = useState('');

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
    const newTodo = { id: newId, text: text, completed: false };
    return [newTodo, ...todos];
  };

  //刪除todo list內容
  const remove = (todos, id) => {
    //移除指定id
    return todos.filter((v) => v.id !== id);
  };
  //切換toggle checkbox狀態
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      //淺拷貝v屬性的值，並且將completed的值變成相反
      if (v.id === id) return { ...v, completed: !v.completed };
      else return { ...v };
    });
  };
  //切換toggle 全選狀態
  const toggleSelectedAll = (todos, isselectedAll) => {
    return todos.map((v) => {
      // 將completed改成isselectedAll狀態
      return { ...v, completed: isselectedAll };
    });
  };
  //   ----------------------------------------
  const handleAdd = (text) => {
    setTodos(add(todos, text));
  };
  const handleRomove = (id) => {
    setTodos(remove(todos, id));
  };
  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id));
  };
  const handleToggleSelectedAll = (isselectedAll) => {
    setTodos(toggleSelectedAll(todos, isselectedAll));
  };
  //   ----------------------------------------
  //顯示內容return
  return (
    <>
      {/* input輸入框 */}
      {/* Add功能 */}
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
      <div>
        {/* 全選功能 */}
      <input
        type="checkbox"
        onChange={(e) => {
          // 全選使用狀態
          //用於檢查checkbox在checked狀態時的屬性
          // 如果已勾選，則回傳值true
          // 如果未勾選，則回傳值false
          // setSelectAll(e.target.checked);

          handleToggleSelectedAll(e.target.checked);
        }}
      />
      全選
      </div>
      {/* list */}
      <ul>
      
        {todos.map((v, i) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  //切換checkbox狀態
                  handleToggleCompleted(v.id);
                }}
              />
              {/* 判斷屬性completed來執行css的className */}
              <span
                className={v.completed ? styles['completed'] : styles['active']}
              >
                {v.text}
              </span>

              {/* Remove功能 */}
              <button
                onClick={() => {
                  handleRomove(v.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
