import { useEffect, useReducer, useState } from 'react';
import styles from './todo.module.css';

import AddForm from './add-form';
import List from './list';
// 3. reducer
import { todoReducer } from './reducer';

// 1. 初始狀態
const todosState = [
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
];

const todosDisplay = [];

const filterTypeState = '所有';

const initState = {
  todos: todosState,
  todosDisplay: todosDisplay,
  filterType: filterTypeState,
};

export default function TodoIndex() {
  // -----------------------------------------------
  // 宣告狀態
  // -----------------------------------------------

  // const [filterType, setFilterType] = useState('所有')
  // 用於呈現按鈕的選項陣列
  const filterOptions = ['所有', '進行中', '已完成'];

  const [state, dispatch] = useReducer(todoReducer, initState);

  useEffect(() => {
    dispatch({ type: 'filter-type-handle', payload: {} });
  }, [state.filterType]);

  return (
    <>
      <AddForm dispatch={dispatch} />
      <br />
      <input
        // 使用不可控表單元素即可
        type="checkbox"
        onChange={(e) => {
          // 切換所有的項目
          // handleToggleSelectedAll(e.target.checked)
          dispatch({
            type: 'toggle-selected-all',
            payload: { isSelectedAll: e.target.checked },
          });
        }}
      />{' '}
      全選
      <List
        // 列表中呈現的項目，還需先經過類型過濾再呈現，並非原本的狀態
        // todos={filterTodos(todos, filterType)}
        todos={state.todosDisplay}
        dispatch={dispatch}
      />
      <hr />
      {/* 類型選項按鈕 */}
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              state.filterType === v
                ? styles['btn-active']
                : styles['btn-normal']
            }
            onClick={() => {
              dispatch({
                type: 'filter-type-change',
                payload: { filterType: v },
              });
            }}
          >
            {v}
          </button>
        );
      })}
    </>
  );
}
