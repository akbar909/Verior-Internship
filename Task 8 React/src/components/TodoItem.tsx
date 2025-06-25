import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          todo.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
        }`}
      >
        {todo.completed && <Check size={14} />}
      </button>
      
      <span
        className={`flex-1 text-lg transition-all duration-200 ${
          todo.completed
            ? 'text-gray-500 line-through'
            : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};