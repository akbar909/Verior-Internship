import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import CartItem from "./CartItem";

const Cart = ({ isOpen, onClose }) => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            // Wait for animation to finish before unmounting
            const timeout = setTimeout(() => setShow(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!show) return null;
    return (
        <div className={`fixed inset-0 z-30 flex items-center justify-end bg-opacity-40 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
            <div className={`w-full max-w-md bg-white shadow-lg rounded-l-2xl p-6 h-full flex flex-col overflow-y-auto transform transition-transform duration-300 ${isOpen ? 'translate-x-0 animate-slide-in-right' : 'translate-x-full animate-slide-out-right'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Shopping Cart</h2>
                    <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full text-lg font-bold">×</button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-center mt-8">Your cart is empty</p>
                    ) : (
                        <>
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                            <div className="mt-6 border-t pt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">Total Quantity:</span>
                                    <span>{totalQuantity}</span>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <span className="font-medium">Total Price:</span>
                                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => dispatch(clearCart())}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex-1"
                                    >
                                        Clear Cart
                                    </button>
                                    <button
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex-1"
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <style jsx>{`
        @keyframes slide-in-right {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        @keyframes slide-out-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-slide-out-right {
          animation: slide-out-right 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
        </div>
    )
}

export default Cart