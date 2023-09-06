import { useState } from 'react';
import styles from './todo.module.css';

import AddForm from './add-form';
import List from './list';

export default function TodoIndex() {
  //-----------移動到add-form--------------
  // 宣告一個專門給文字輸入框使用得狀態
  // const [inputValue, setInputValue] = useState('');

  // 全選專用的狀態
  // const [selectAll, setSelectAll] = useState(false);

  //   ----------------------------------------
  // 宣告狀態
  //   ----------------------------------------

  // 過濾類型用的狀態
  // 值只能是三者之一，'所有'|'進行中'|'已完成'
  const [filterType, setFilterType] = useState('所有');
  const filterOptions = ['所有', '進行中', '已完成'];

  // 每個todo={id: number, text: string, completed: boolean, editing: boolean}

  const [todos, setTodos] = useState([
    // 使用物件陣列
    {
      id: 1,
      text: '買牛奶',
      completed: true,
      editing: false,
    },
    {
      id: 2,
      text: '學react',
      completed: false,
      editing: false,
    },
    {
      id: 3,
      text: '打慕朵',
      completed: true,
      editing: false,
    },
  ]);
  //   ----------------------------------------
  // 純函式:只做狀態改變(第1.2步)
  //   ----------------------------------------

  // 依類型過濾
  const filterTodos = (todos, filterType) => {
    if (filterType === '已完成')
      return todos.filter((v) => v.completed === true);
    if (filterType === '進行中')
      return todos.filter((v) => v.completed === false);
    //預設=所有(不過濾)
    return todos;
  };

  // 依傳入text進行新增todo在陣列最前面
  const add = (todos, text) => {
    // 仿照資料庫id遞增的做法(只限id是數字)
    const ids = todos.map((v) => v.id);
    // 有資料取最大值當+1新id，沒資料用1開始
    const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1;
    //建立新的todo
    const newTodo = { id: newId, text: text, completed: false, editing: false };
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

  //依傳入id進行切換editing屬性改變
  //同時間只會有一個editing是true
  const toggleEditing = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, editing: true };
      // 其它非此id的項目，editing全設為false
      else return { ...v, editing: false };
    });
  };

  // 依傳入id進行更新text
  // 注意: 更新完成後，editing要改為false
  const updateText = (todos, id, text) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, text: text, editing: false };
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

  const handleToggleEditing = (id) => {
    setTodos(toggleEditing(todos, id));
  };

  const handleUpdateText = (id, text) => {
    setTodos(updateText(todos, id, text));
  };

  const handleToggleSelectedAll = (isselectedAll) => {
    setTodos(toggleSelectedAll(todos, isselectedAll));
  };
  //   ----------------------------------------

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      <br />
      <input
        type="checkbox"
        // checked={selectAll}
        onChange={(e) => {
          // setSelectAll(e.target.checked);
          //切換所有的項目
          handleToggleSelectedAll(e.target.checked);
        }}
      />{' '}
      全選
      <List
        // 列表中呈現的項目，還需先經過類型過濾再呈現，並非原本的狀態
        todos={filterTodos(todos, filterType)}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
        handleToggleEditing={handleToggleEditing}
        handleUpdateText={handleUpdateText}
      />
      <hr />
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              filterType === v ? styles['btn-active'] : styles['btn-normal']
            }
            onClick={() => {
              setFilterType(v);
            }}
          >
            {v}
          </button>
        );
      })}
    </>
  );
}
