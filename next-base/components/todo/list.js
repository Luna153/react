import React from 'react';
import styles from './todo.module.css';

export default function List({ todos, handleRemove, handleToggleCompleted }) {
  return (
    <>
      <ul>
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
              {/* {v.completed ? <del>{v.text}</del> : v.text} */}
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
      </ul>
    </>
  );
}
