import React, { useState } from 'react';
import Header from './components/common/Header';
import Quiz from './components/Quiz/Quiz';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const [currentMode, setCurrentMode] = useState<'quiz' | 'cart'>('quiz');
  const [cartItemCount, setCartItemCount] = useState(0);

  // This would typically be managed by a global state management solution
  // For simplicity, we're tracking cart count at the app level
  React.useEffect(() => {
    // This is a simplified way to track cart items
    // In a real app, you'd want to use Context or a state management library
    const handleStorageChange = () => {
      // Update cart count logic would go here
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header 
        currentMode={currentMode}
        onModeChange={setCurrentMode}
        cartItemCount={cartItemCount}
      />
      
      <main className="pb-8">
        {currentMode === 'quiz' ? (
          <Quiz />
        ) : (
          <ShoppingCart />
        )}
      </main>
    </div>
  );
}

export default App;