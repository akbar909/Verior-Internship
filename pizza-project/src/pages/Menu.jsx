import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../cartSlice';
import pizzaData from '../data';

const Menu = ({ name }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const getQuantity = (pizzaName) => {
        const item = cartItems.find(i => i.pizzaName === pizzaName);
        return item ? item.quantity : 0;
    };
    return (
        <div className="max-w-3xl mx-auto py-2 px-1 sm:px-2 md:px-4">
            {pizzaData.map((pizza) => {
                const quantity = getQuantity(pizza.name);
                return (
                    <div
                        key={pizza.name}
                        className="flex items-center border-b last:border-b-0 py-2 px-1 sm:px-2 md:px-0 mb-6 sm:mb-10 md:mb-12"
                    >
                        <img
                            src={pizza.photoName}
                            alt={pizza.name}
                            className={`w-24 h-16 sm:w-32 sm:h-24 md:w-40 md:h-32 object-cover rounded-md mr-2 sm:mr-4 md:mr-6 ${pizza.soldOut ? 'grayscale' : ''}`}
                        />
                        <div className="flex-1 min-w-0">
                            <h2 className="font-bold text-base sm:text-xl md:text-2xl mb-1">{pizza.name}</h2>
                            <p className="italic text-gray-700 mb-2 text-xs sm:text-base">{pizza.ingredients}</p>
                            {pizza.soldOut ? (
                                <span className="text-sm sm:text-lg text-gray-500 font-semibold">SOLD OUT</span>
                            ) : (
                                <span className="text-sm sm:text-lg text-black font-semibold">€{pizza.price.toFixed(2)}</span>
                            )}
                        </div>
                        {!pizza.soldOut && (
                            <div className='mt-4 sm:mt-12'>
                                {quantity === 0 ? (
                                    <button
                                        className="bg-[#facc15] hover:bg-yellow-300 text-black cursor-pointer font-semibold px-4 py-2 sm:px-8 sm:py-3 rounded-full ml-0 sm:ml-4 transition-colors duration-300 text-xs sm:text-base"
                                        onClick={() => dispatch(addToCart({ pizza, userName: name }))}
                                    >
                                        ADD TO CART
                                    </button>
                                ) : (
                                    <div className="flex items-center space-x-1 sm:space-x-2">
                                        <button
                                            className="bg-[#facc15] hover:bg-amber-300 cursor-pointer px-2 py-1 sm:px-4 sm:py-2 rounded-full text-base sm:text-xl transition-colors duration-300"
                                            onClick={() => dispatch(decreaseQuantity(pizza.name))}
                                        >-</button>
                                        <span className="font-bold text-xs sm:text-lg">{quantity}</span>
                                        <button
                                            className="bg-[#facc15] hover:bg-amber-300 cursor-pointer px-2 py-1 sm:px-4 sm:py-2 rounded-full text-base sm:text-xl transition-colors duration-300"
                                            onClick={() => dispatch(increaseQuantity(pizza.name))}
                                        >+</button>
                                        <button
                                            className="bg-[#facc15] hover:bg-yellow-300 cursor-pointer text-black font-semibold px-4 py-2 sm:px-8 sm:py-3 rounded-full ml-1 sm:ml-4 transition-colors duration-300 text-xs sm:text-base"
                                            onClick={() => dispatch(removeFromCart(pizza.name))}
                                        >DELETE</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
