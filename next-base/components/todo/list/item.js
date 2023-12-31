import styles from '../todo.module.css'

export default function Item({
  id,
  completed,
  text,
  dispatch,
  // handleRemove,
  // handleToggleCompleted,
  // handleToggleEditing,
}) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            // 這裡要作toggle completed狀態的動作
            // handleToggleCompleted(id)
            dispatch({ type: 'toggle-completed', payload: { id } })
          }}
        />
        <span
          onDoubleClick={() => {
            // 這裡作切換進入編輯狀態的動作
            // handleToggleEditing(id)
            dispatch({ type: 'toggle-editing', payload: { id } })
          }}
          className={completed ? styles['completed'] : styles['active']}
        >
          {text}
        </span>
        <button
          onClick={() => {
            // 這裡作刪除的動作
            //handleRemove(id)
            dispatch({ type: 'remove', payload: { id } })
          }}
        >
          X
        </button>
      </li>
    </>
  )
}