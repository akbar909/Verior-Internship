import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 placeholder-gray-400"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:bg-blue-600 focus:outline-none transition-colors duration-200 flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
          Add
        </button>
      </div>
    </form>
  );
};