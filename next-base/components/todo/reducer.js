// -----------------------------------------------
// 純函式: 只作狀態改變(第1,2步)
// -----------------------------------------------

// 依類型過濾
// const action = { type: 'filter-type', payload: { filterType: filterType }}
const filterTodos = (todos, payload) => {
  if (payload.filterType === '已完成') return todos.filter((v) => v.completed);
  // 也可以寫成下面這行
  // return todos.filter((v) => v.completed === true)

  if (payload.filterType === '進行中') return todos.filter((v) => !v.completed);
  // 也可以寫成下面這行
  // return todos.filter((v) => v.completed === false)

  // 所有
  return todos;
};

// const action= {type:'add', payload:{text}}
// 依傳入text，新增todo項目在陣列最前面
const add = (todos, payload) => {
  // 仿照資料庫id遞增的作法(只限於id是數字)
  const ids = todos.map((v) => v.id);
  // 有資料取最大值+1當新id，沒資料用1開始
  const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1;
  // 建立新的todo
  const newTodo = {
    id: newId,
    text: payload.text,
    completed: false,
    editing: false,
  };
  // 回傳新陣列，把新項目加到todos的陣列最前面(1~2步驟)
  return [newTodo, ...todos];
};

// const action= {type:'remove', payload:{id}}
// 依傳入id進行刪除
const remove = (todos, payload) => {
  return todos.filter((v) => v.id !== payload.id);
};

// const action= {type:'toggle-completed', payload:{id}}
// 依傳入id進行切換completed屬性改變
const toggleCompleted = (todos, payload) => {
  return todos.map((v) => {
    if (v.id === payload.id) return { ...v, completed: !v.completed };
    else return { ...v };
  });
};

// const action= {type:'toggle-editing', payload:{id}}
// 依傳入id進行切換editing屬性改變
// 注意: 同時間只會有一個editing是true
const toggleEditing = (todos, payload) => {
  return todos.map((v) => {
    if (v.id === payload.id) return { ...v, editing: true };
    // 其它非此id的項目，editing全設為false
    else return { ...v, editing: false };
  });
};

// const action= {type:'update-text', payload:{id, text}}
// 依傳入id進行更新text
// 注意: 更新完成後，editing要改為false
const updateText = (todos, payload) => {
  return todos.map((v) => {
    if (v.id === payload.id)
      return { ...v, text: payload.text, editing: false };
    else return { ...v };
  });
};

// const action= {type:'toggle-selected-all', payload:{isSelectedAll}}
// 依傳入isSelectedAll(布林值)進行切換所有completed屬性改變
const toggleSelectedAll = (todos, payload) => {
  return todos.map((v) => {
    return { ...v, completed: payload.isSelectedAll };
  });
};

// state = { todos, filterType}
export const todoReducer = (state, action) => {
  switch (action.type) {
    // 過濾類型用的狀態
    // 值只能是三者之一: '所有' | '進行中' | '已完成'
    case 'filter-type-change':
      return { ...state, filterType: action.payload.filterType };
    case 'filter-type-handle': {
      const newTodosDisplay = filterTodos(state.todos, {
        filterType: state.filterType,
      });
      return { ...state, todosDisplay: newTodosDisplay };
    }
    case 'add':
      return add(state.todos, action.payload);
    case 'remove':
      return remove(state.todos, action.payload);
    case 'toggle-completed':
      return toggleCompleted(state.todos, action.payload);
    case 'toggle-editing':
      return toggleEditing(state.todos, action.payload);
    case 'update-text':
      return updateText(state.todos, action.payload);
    case 'toggle-selected-all':
      return toggleSelectedAll(state.todos, action.payload);
    default:
      return state;
  }
};
