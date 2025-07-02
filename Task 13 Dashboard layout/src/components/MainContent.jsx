

export function MainContent() {
 

  return (
    <main className="flex-1 p-4 lg:p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome to Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                You're currently viewing the dashboard section of your admin dashboard.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </main>
  );
}