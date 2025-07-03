import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ORDER_MINUTES = 45;
const PRIORITY_FEE = 2;

function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const OrderStatus = () => {
    const { orderId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [minutesLeft, setMinutesLeft] = useState(ORDER_MINUTES);

    useEffect(() => {
        // Get order from location state or localStorage
        let orderData = location.state?.order;
        if (!orderData) {
            const stored = localStorage.getItem('order_' + orderId);
            if (stored) orderData = JSON.parse(stored);
        }
        setOrder(orderData);
        if (!orderData) return;
        // Countdown
        const created = new Date(orderData.createdAt);
        const interval = setInterval(() => {
            const now = new Date();
            // Always get latest priority from localStorage
            const stored = localStorage.getItem('order_' + orderId);
            if (stored) {
                const latestOrder = JSON.parse(stored);
                setOrder(latestOrder);
            }
            const diff = Math.max(0, Math.ceil((created.getTime() + ORDER_MINUTES * 60000 - now.getTime()) / 60000));
            setMinutesLeft(diff);
        }, 1000);
        return () => clearInterval(interval);
    }, [orderId, location.state]);

    if (!order) return (
        <div className="max-w-3xl mx-auto py-10 ">
            <div className="text-lg font-semibold mb-6">Couldn't find order <span className="font-mono">#{orderId}</span></div>
            <button onClick={() => navigate('/')} className="cursor-pointer text-blue-600 hover:underline text-base">&larr; Go back</button>
        </div>
    );

    const deliveryTime = new Date(new Date(order.createdAt).getTime() + ORDER_MINUTES * 60000);
    const isPriority = order.priority;
    const pizzaTotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = pizzaTotal + (isPriority ? PRIORITY_FEE : 0);

    return (
        <div className="max-w-3xl mx-auto py-6 px-2 sm:py-10">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-sm sm:text-2xl md:text-3xl font-bold">Order ${orderId} status</h2>
                <div className="flex gap-2 sm:gap-3">
                    {isPriority && <span className="bg-red-500 text-white px-3 py-1 sm:px-5 sm:py-2 rounded-full font-semibold text-sm sm:text-lg">PRIORITY</span>}
                    <span className="bg-green-500 text-white px-3 py-1 sm:px-5 sm:py-2 rounded-full font-semibold text-sm sm:text-lg">PREPARING ORDER</span>
                </div>
            </div>
            <div className="bg-gray-100 rounded mb-4 sm:mb-6 flex items-center justify-between px-4 py-3 sm:px-8 sm:py-6">
                <span className="font-bold text-base sm:text-xl">Only {minutesLeft} minutes left <span role="img" aria-label="emoji">😍</span></span>
                <span className="text-gray-500 text-xs sm:text-base">(Estimated delivery: {deliveryTime.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}, {formatTime(deliveryTime)})</span>
            </div>
            <div className="border-b flex items-center justify-between py-3 sm:py-6">
                <div>
                    {order.items.map((item, idx) => (
                        <div key={idx} className="">
                            <span className="font-bold text-base sm:text-lg">{item.quantity}&times; {item.pizzaName}</span>
                          
                        </div>
                    ))}
                </div>
                <div className="font-bold text-base sm:text-lg text-right">
                    {order.items.map((item, idx) => (
                        <div key={idx}>€{(item.price * item.quantity).toFixed(2)}</div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 rounded mt-6 sm:mt-8 px-4 py-4 sm:px-8 sm:py-8">
                <div className="mb-1 sm:mb-2 text-sm sm:text-base">Price pizza: €{pizzaTotal.toFixed(2)}</div>
                {isPriority && <div className="mb-1 sm:mb-2 text-sm sm:text-base">Price priority: €{PRIORITY_FEE.toFixed(2)}</div>}
                <div className="font-bold text-lg sm:text-xl mt-2">To pay on delivery: €{total.toFixed(2)}</div>
            </div>
            {!isPriority && (
                <div className="flex justify-end mt-6 sm:mt-8">
                    <button className="bg-[#facc15] px-6 py-2 sm:px-10 sm:py-4 rounded-full font-semibold hover:bg-yellow-300 text-base sm:text-lg" onClick={() => {
                        const updatedOrder = { ...order, priority: true };
                        setOrder(updatedOrder);
                        localStorage.setItem('order_' + orderId, JSON.stringify(updatedOrder));
                    }}>
                        MAKE PRIORITY
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrderStatus;
