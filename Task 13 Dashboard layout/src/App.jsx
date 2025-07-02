import { DashboardProvider } from './context/DashboardContext';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <DashboardProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <MainContent />
        </div>
      </div>
    </DashboardProvider>
  );
}

export default App;