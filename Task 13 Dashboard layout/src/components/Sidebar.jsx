import {
  BarChart3,
  FileText,
  Home,
  LogOut,
  Mail,
  Settings,
  Users,
  X
} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

const navigationItems = [
  { name: 'Dashboard', icon: Home },
  { name: 'Analytics', icon: BarChart3 },
  { name: 'Users', icon: Users },
  { name: 'Reports', icon: FileText },
  { name: 'Messages', icon: Mail },
  { name: 'Settings', icon: Settings },
];

export function Sidebar() {
  const { sidebarOpen, activeNavItem, closeSidebar, setActiveNavItem } = useDashboard();

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-800 shadow-xl
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Admin
            </span>
          </div>
          {/* Close button - mobile only */}
          <button
            onClick={closeSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNavItem === item.name;
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavItemClick(item.name)}
                className={`
                  nav-item w-full text-left
                  ${isActive ? 'active' : ''}
                `}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            className={`nav-item w-full text-left flex items-center gap-3`}
          >
            <LogOut className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="text-base text-gray-600 dark:text-gray-400 font-medium">
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
}