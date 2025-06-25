import React from 'react';
import { ListTodo } from 'lucide-react';
import { useTodos } from '../hooks/useTodos';
import { AddTodo } from './AddTodo';
import { TodoItem } from './TodoItem';
import { TodoStats } from './TodoStats';

export const TodoApp: React.FC = () => {
  const { todos, addTodo, deleteTodo, toggleTodo, clearCompleted } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-500 text-white rounded-2xl shadow-lg">
              <ListTodo size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Todo List</h1>
          </div>
        </div>

        {/* Add Todo Form */}
        <AddTodo onAddTodo={addTodo} />

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <ListTodo size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-500 mb-2">
                No todos yet
              </h3>
              <p className="text-gray-400">
                Add your first todo above to get started!
              </p>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>

        {/* Stats */}
        <TodoStats todos={todos} onClearCompleted={clearCompleted} />
      </div>
    </div>
  );
};