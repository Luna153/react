import { useReducer } from 'react';

// 1.先決定初始狀態。狀態的樣貌在這決定
const initState = { total: 0 };

// 2.決定應用的 action(動作) 有哪些
// action 是描述"發生了甚麼事情"的物件，包含了type(類型)與payload(有效資料，也是物件)
// const increase = { type: 'increase', payload: { value: 1 } };
// const decrease = { type: 'decrease', payload: { value: 1 } }

// 3.先寫 reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { total: state.total + action.payload.value };
    case 'decrease':
      return { total: state.total - action.payload.value };
    default:
      return state;
  }
};

export default function Counter() {
  // 4. 宣告state, dispatch
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <h1>計數器(useReducer)</h1>
      {/* 5-1用state獲得值 */}
      <h1>{state.total}</h1>
      <button
        onClick={() => {
          // 5-2要改變狀態要改用發送動作物件
          dispatch({ type: 'increase', payload: { value: 1 } });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
            // 要改變狀態要改用發送動作物件
          dispatch({ type: 'decrease', payload: { value: 1 } });
        }}
      >
        -1
      </button>
    </>
  );
}
