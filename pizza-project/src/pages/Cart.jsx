import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../cartSlice';
const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, userName } = useSelector(state => state.cart);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

    const handleback = () => {
        navigate('/menu');
    };
    const handleOrder = () => {
        navigate('/order/new');
    };

    return (
        <div className="max-w-3xl mx-auto py-4 px-1 sm:px-2 md:px-4">
            <div className="mb-4 sm:mb-6">
                <button onClick={handleback} href="/menu" className="text-blue-600 cursor-pointer hover:underline text-sm sm:text-base">&larr; Back to menu</button>
            </div>
            {items.length === 0 ? (
                <div className="font-semibold text-sm sm:text-base">Your cart is still empty. Start adding some pizzas :)</div>
            ) : (
                <>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Your cart, {userName}</h2>
                    {items.map(item => (
                        <div key={item.pizzaName} className="flex items-center justify-between border-b py-2 sm:py-4">
                            <div className="text-base sm:text-lg flex-1">
                                {item.quantity}&times; {item.pizzaName}
                            </div>
                            <div className="font-bold text-base sm:text-lg w-16 sm:w-24 text-right">€{(item.price * item.quantity).toFixed(2)}</div>
                            <div className="flex items-center ml-2 sm:ml-6 duration-300">
                                <button className="transition-colors duration-300 cursor-pointer bg-[#facc15] hover:bg-yellow-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-base sm:text-xl" onClick={() => dispatch(decreaseQuantity(item.pizzaName))}>-</button>
                                <span className="mx-2 sm:mx-3 font-bold text-base sm:text-lg">{item.quantity}</span>
                                <button className="transition-colors duration-300 cursor-pointer bg-[#facc15] hover:bg-yellow-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-base sm:text-xl" onClick={() => dispatch(increaseQuantity(item.pizzaName))}>+</button>
                                <button className="transition-colors duration-300 cursor-pointer ml-2 sm:ml-4 bg-[#facc15] px-3 py-2 sm:px-6 sm:py-2 hover:bg-yellow-300 rounded-full font-bold text-xs sm:text-base" 
                                onClick={() => dispatch(removeFromCart(item.pizzaName))}>DELETE</button>
                            </div>
                        </div>
                    ))}
                    <div className="flex space-x-2 sm:space-x-4 mt-6 sm:mt-8 mb-12">
                        <button className="cursor-pointer bg-[#facc15] hover:bg-amber-300 text-black font-semibold px-4 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-base" onClick={handleOrder}>ORDER PIZZAS</button>
                        <button className="transition-colors duration-300 cursor-pointer text-gray-400 hover:bg-gray-300 hover:text-black border-2 border-gray-300 font-semibold px-4 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-base" onClick={() => dispatch(clearCart())}>CLEAR CART</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart