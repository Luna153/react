import React from 'react'
// import styles from '../todo.module.css'
import Item from './item'
import EditForm from './edit-form'

export default function List({ todos, dispatch }) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          const { id, text, completed, editing } = v

          return editing ? (
            <EditForm
              key={id}
              id={id}
              text={text}
              dispatch={dispatch}
              // handleUpdateText={handleUpdateText}
            />
          ) : (
            <Item
              key={id}
              id={id}
              text={text}
              completed={completed}
              dispatch={dispatch}
              // handleRemove={handleRemove}
              // handleToggleCompleted={handleToggleCompleted}
              // handleToggleEditing={handleToggleEditing}
            />
          )
        })}
      </ul>
    </>
  )
}