import {
  Menu,
  Search,
  Sun,
  Moon,
  User
} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

export function Navbar() {
  const {
    toggleSidebar,
    darkMode,
    toggleDarkMode,
    
  } = useDashboard();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        <div className="flex items-center gap-4">

          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="hidden lg:flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="
                pl-10 pr-4 py-2 w-80 text-sm
                bg-gray-50 dark:bg-gray-700 
                border border-gray-200 dark:border-gray-600
                rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500
                placeholder-gray-400 dark:placeholder-gray-500
              "
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="
              p-2 rounded-lg 
              hover:bg-gray-100 dark:hover:bg-gray-700 
              transition-all duration-200 hover:scale-105
            "
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>

          <button className="
            flex items-center gap-2 p-2 rounded-lg 
            hover:bg-gray-100 dark:hover:bg-gray-700 
            transition-all duration-200 hover:scale-105
          ">
            <div className="h-8 w-8 bg-primary-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="hidden md:block text-sm font-medium">
              Admin User
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}