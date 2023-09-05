import { useState } from 'react';
import styles from './todo.module.css';

import AddForm from './add-form';
import List from './list';

export default function TodoIndex() {
  //-----------移動到add-form--------------
  //宣告一個專門給文字輸入框使用得狀態
  //   const [inputValue, setInputValue] = useState('');

  // 全選專用的狀態
  const [selectAll, setSelectAll] = useState(false);

  // 每個todo={id:number,text:string}
  const [todos, setTodos] = useState([
    // 使用物件陣列
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
  //   ----------------------------------------
  // 純函式:只做狀態改變(第1.2步)
  //   ----------------------------------------

  // 依傳入text進行新增todo在陣列最前面
  const add = (todos, text) => {
    // 仿照資料庫id遞增的做法(只限id是數字)
    const ids = todos.map((v) => v.id);
    // 有資料取最大值當+1新id，沒資料用1開始
    const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1;
    //建立新的todo
    const newTodo = { id: newId, text: text, completed: false };
    // 回傳薪陣列，把新項目加到todos的陣列最前面(1-2步驟)
    return [newTodo, ...todos];
  };

  //依傳入id進行刪除
  const remove = (todos, id) => {
    return todos.filter((v) => v.id !== id);
  };

  // 依傳入id進行切換completed屬性改變
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, completed: !v.completed };
      else return { ...v };
    });
  };

  //依傳入isSelectedAll(布林值)進行切換屬性改變
  const toggleSelectedAll = (todos, isSelectedAll = false) => {
    return todos.map((v) => {
      return { ...v, completed: isSelectedAll };
    });
  };

  //   ----------------------------------------
  // 事件處理函式
  //   ----------------------------------------
  // 第3.步 設定回原本的狀態中
  const handleAdd = (text) => {
    setTodos(add(todos, text));
  };

  const handleRemove = (id) => {
    setTodos(remove(todos, id));
  };

  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id));
  };

  const handleToggleSelectedAll = (isselectedAll) => {
    setTodos(toggleSelectedAll(todos, isselectedAll));
  };
  //   ----------------------------------------

  return (
    <>
      {/* -----------移動到add-form-------------- */}
      {/* <input
        type="text"
        // 可控表單元件:value連接到某個狀態
        value={inputValue}
        // 可控表單元件: onChange事件能更動到那個狀態
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // 新增項目到todos狀態中
            handleAdd(e.target.value);

            //清空文字輸入框
            setInputValue('');
          }
        }}
      /> */}
      {/* -----------引用add-form-------------- */}
      <AddForm handleAdd={handleAdd} />
      <br />
      <input
        type="checkbox"
        checked={selectAll}
        onChange={(e) => {
          setSelectAll(e.target.checked);
          //切換所有的項目
          handleToggleSelectedAll(e.target.checked);
        }}
      />{' '}
      全選
      {/* -----------移動到list-------------- */}
      {/* <ul>
        {todos.map((v, i) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  //這裡要做toggle completed狀態的動作
                  handleToggleCompleted(v.id);
                }}
              />
              {/* {v.completed ? <del>{v.text}</del> : v.text} 
              <span
                className={v.completed ? styles['completed'] : styles['active']}
              >
                {v.text}
              </span>
              <button
                onClick={() => {
                  //這裡要做刪除的動作
                  handleRemove(v.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul> */}
      {/* -----------引用list-------------- */}
      <List
        todos={todos}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
      />
    </>
  );
}
