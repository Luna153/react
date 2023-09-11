import React from 'react'
import TodoIndex from '@/components/todo-reducer'

export default function TodoPage() {
  return (
    <>
      <h1>待辨事項(useReducer + useContext)</h1>
      <TodoIndex />
    </>
  )
}