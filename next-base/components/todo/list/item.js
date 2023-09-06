import styles from '../todo.module.css';

export default function Item({
  id,
  completed,
  text,
  handleRemove,
  handleToggleEditing,
  handleToggleCompleted,
}) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            // 這裡要作toggle completed狀態的動作
            handleToggleCompleted(id);
          }}
        />
        <span
        // DoubleClick就可以編輯
          onDoubleClick={() => {
            // 這裡作切換進入編輯狀態的動作
            handleToggleEditing(id);
          }}
          className={completed ? styles['completed'] : styles['active']}
        >
          {text}
        </span>

        {/* <button
          onClick={() => {
            // 這裡作切換進入編輯狀態的動作
            handleToggleEditing(id);
          }}
        >
          編輯
        </button> */}

        <button
          onClick={() => {
            // 這裡作刪除的動作
            handleRemove(id);
          }}
        >
          X
        </button>
      </li>
    </>
  );
}
