import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
  onClearCompleted: () => void;
}

export const TodoStats: React.FC<TodoStatsProps> = ({ todos, onClearCompleted }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;
  const hasCompleted = completedTodos > 0;

  if (totalTodos === 0) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Circle size={18} />
            <span className="font-medium">{activeTodos} active</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle size={18} />
            <span className="font-medium">{completedTodos} completed</span>
          </div>
        </div>
        
        {hasCompleted && (
          <button
            onClick={onClearCompleted}
            className="flex items-center gap-2 px-4 py-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium"
          >
            <Trash2 size={16} />
            Clear completed
          </button>
        )}
      </div>
      
      {totalTodos > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>Progress</span>
            <span>{Math.round((completedTodos / totalTodos) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedTodos / totalTodos) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};