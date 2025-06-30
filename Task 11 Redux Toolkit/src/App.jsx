import { useState } from "react"
import { Provider } from "react-redux"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import { store } from "./store"
import Header from "./components/Header"
function App() {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  const closeCart = () => {
    setIsCartOpen(false)
  }

  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col bg-gray-50">
       <Header onCartToggle={toggleCart} />

        <main className="flex-1 p-4 max-w-7xl w-full mx-auto">
          <ProductList />
        </main>

        <Cart isOpen={isCartOpen} onClose={closeCart} />

        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          <span className="text-sm">&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</span>
        </footer>
      </div>
    </Provider>
  )
}

export default App
