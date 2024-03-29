const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'UPDATE_TODO':
      return state.map(todo => {
        return (todo.id === action.todo.id) ? {...todo, text: action.todo.text } : todo
      });
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'GET_TODO':
      return action.todos
    default:
      return state
  }
}

export default todos
