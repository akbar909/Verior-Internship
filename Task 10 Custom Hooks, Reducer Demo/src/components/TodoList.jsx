import React, { useReducer, useCallback } from 'react'

const initialState = []

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.payload, completed: false }]
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
  console.log('Rendering:', todo.text)
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  )
})

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, [])
  const [input, setInput] = React.useState("")

  const addTodo = () => {
    if (input.trim() !== '') {
      dispatch({ type: 'ADD', payload: input })
      setInput('')
    }
  }

  const toggleTodo = useCallback((id) => {
    dispatch({ type: 'TOGGLE', payload: id })
  }, [])

  const deleteTodo = useCallback((id) => {
    dispatch({ type: 'DELETE', payload: id })
  }, [])

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded px-2 py-1 w-full"
          placeholder="Add a task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {state.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
