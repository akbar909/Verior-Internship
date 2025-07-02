import { createContext, useContext, useReducer, useEffect } from 'react';

const DashboardContext = createContext();

const initialState = {
  sidebarOpen: false,
  darkMode: true,
  activeNavItem: 'Dashboard',

};

function dashboardReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case 'CLOSE_SIDEBAR':
      return { ...state, sidebarOpen: false };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'SET_DARK_MODE':
      return { ...state, darkMode: action.payload };
    case 'SET_ACTIVE_NAV_ITEM':
      return { ...state, activeNavItem: action.payload };
  
    default:
      return state;
  }
}

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      dispatch({ type: 'SET_DARK_MODE', payload: JSON.parse(savedDarkMode) });
    } else {
      const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dispatch({ type: 'SET_DARK_MODE', payload: systemDarkMode });
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (state.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  // Close sidebar on window resize if mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        dispatch({ type: 'CLOSE_SIDEBAR' });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => dispatch({ type: 'TOGGLE_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
  const toggleDarkMode = () => dispatch({ type: 'TOGGLE_DARK_MODE' });
  const setActiveNavItem = (item) => dispatch({ type: 'SET_ACTIVE_NAV_ITEM', payload: item });
  

  return (
    <DashboardContext.Provider
      value={{
        ...state,
        toggleSidebar,
        closeSidebar,
        toggleDarkMode,
        setActiveNavItem,
    
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}