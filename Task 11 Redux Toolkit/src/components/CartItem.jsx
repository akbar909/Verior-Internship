import { useDispatch } from "react-redux";
import { addItem, decreaseQuantity, removeItem } from "../store/cartSlice";
const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const hanldeIncrease = () => {
        dispatch(addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
        }))
    }
    const handleDecrease = () => {
        dispatch(decreaseQuantity(item.id))
    }
    const handleRemove = () => {
        dispatch(removeItem(item.id))
    }
    return (
        <div className="flex flex-row items-center gap-4 bg-gray-100 rounded-lg p-4 shadow-sm w-full">
            <img src={item.image} alt={item.name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg mb-2 sm:mb-0" />
            <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex-1">
                    <h4 className="font-semibold text-base sm:text-lg truncate">{item.name}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <button
                            onClick={handleDecrease}
                            className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-lg font-bold"
                            aria-label="Decrease quantity"
                        >
                            -
                        </button>
                        <span className="mx-2 min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                            onClick={hanldeIncrease}
                            className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-lg font-bold"
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="flex flex-row sm:flex-col items-end sm:items-end gap-2 sm:gap-2 min-w-[90px] sm:min-w-[100px] justify-between sm:justify-end">
                    <p className="font-semibold text-sm sm:text-base">${item.totalPrice.toFixed(2)}</p>
                    <button
                        onClick={handleRemove}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs sm:text-sm"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem