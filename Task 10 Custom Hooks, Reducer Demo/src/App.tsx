import useFetch from "./hooks/useFetch"
import TodoList from "./components/TodoList"

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5")

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">React Custom Hooks + Reducer Demo</h1>

      {/* API Call Section */}
      <div className="max-w-2xl mx-auto bg-white p-4 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Posts (useFetch hook)</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data && (
          <ul className="list-disc pl-5 space-y-2">
            {data.map((post) => (
              <li key={post.id} className="text-gray-800">{post.title}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Todo List Section */}
      <TodoList />
    </div>
  )
}

export default App
