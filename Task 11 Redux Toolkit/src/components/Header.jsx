import { useSelector } from "react-redux"

const Header = ({ onCartToggle }) => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-20 shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold">E-Commerce Store</h1>
            <button
                onClick={onCartToggle}
                className="relative bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center"
            >
                <span className="mr-2">Cart</span>
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold bg-red-500 text-white rounded-full absolute -top-2 -right-2">{totalQuantity}</span>
            </button>
        </header>
    )
}

export default Header