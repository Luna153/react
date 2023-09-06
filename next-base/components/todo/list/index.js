//原list檔->開list資料夾->檔名更改為index->將list內容放入item.js
import React from 'react';
// import styles from '../todo.module.css'; //路徑網上一層
import Item from './item';
import EditForm from './edit-form';

export default function List({
  todos,
  handleRemove,
  handleToggleEditing,
  handleUpdateText,
  handleToggleCompleted,
}) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          /* list內容移動到item */
          const { id, text, completed, editing } = v;

          return editing ? (
            <EditForm
              key={id}
              id={id}
              text={text}
              handleUpdateText={handleUpdateText}
            />
          ) : (
            <Item
              key={id}
              id={id}
              text={text}
              completed={completed}
              handleRemove={handleRemove}
              handleToggleCompleted={handleToggleCompleted}
              handleToggleEditing={handleToggleEditing}
            />
          );
        })}
      </ul>
    </>
  );
}
