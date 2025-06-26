import React from 'react';
import { ShoppingCart, Brain } from 'lucide-react';

interface HeaderProps {
  currentMode: 'quiz' | 'cart';
  onModeChange: (mode: 'quiz' | 'cart') => void;
  cartItemCount: number;
}

export default function Header({ currentMode, onModeChange, cartItemCount }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">QS</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">QuizShop</h1>
            </div>
          </div>
          
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => onModeChange('quiz')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentMode === 'quiz'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-500 hover:bg-purple-50'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">Quiz</span>
            </button>
            
            <button
              onClick={() => onModeChange('cart')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                currentMode === 'cart'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Shop</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}