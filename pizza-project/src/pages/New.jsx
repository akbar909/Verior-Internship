import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../cartSlice';

function generateOrderId() {
  return  Math.random().toString(36).substr(2, 6).toUpperCase();
}

const New = ({ name }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();
  const [priority, setPriority] = useState(false);

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-2">
        <div className="mb-4 sm:mb-6">
          <button onClick={() => navigate('/menu')} className="text-blue-600 cursor-pointer hover:underline text-sm sm:text-base">&larr; Back to menu</button>
        </div>
        <div className="font-semibold text-sm sm:text-base">Your cart is still empty. Start adding some pizzas :)</div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = generateOrderId();
    const order = {
      id: orderId,
      name,
      items,
      total,
      priority,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('order_' + orderId, JSON.stringify(order));
    dispatch(clearCart());
    navigate(`/order/${orderId}`, { state: { order } });
  };

  return (
    <div className="max-w-3xl mx-auto py-6 px-2 sm:py-4">
      <h2 className="text-lg sm:text-3xl font-semibold mb-6 sm:mb-8">Ready to order? Let's go!</h2>
      <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label className="font-medium w-32 sm:w-40 text-sm sm:text-base">First Name</label>
          <input type="text" className="flex-1 rounded-full bg-gray-100 px-4 py-2 sm:px-8 text-base sm:text-lg outline-none" value={name} readOnly />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label className="font-medium w-32 sm:w-40 text-sm sm:text-base">Phone number</label>
          <input required type="text" className="flex-1 rounded-full bg-gray-100 px-4 py-2 sm:px-8 text-base sm:text-lg outline-0 focus:outline-[3px] focus:outline-[#facc15] transition-all duration-100" placeholder="" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label className="font-medium w-32 sm:w-40 text-sm sm:text-base">Address</label>
          <div className="flex-1 flex gap-2 sm:gap-4">
            <input required type="text" className="flex-1 rounded-full bg-gray-100 px-4 py-2 sm:px-8  text-base sm:text-lg outline-0 focus:outline-[3px] focus:outline-[#facc15] transition-all duration-100" placeholder="" />
            <button type="button" className="cursor-pointer bg-[#facc15] px-4 py-2 sm:px-8  rounded-full font-semibold hover:bg-yellow-300 text-xs sm:text-base">GET POSITION</button>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <input type="checkbox" className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6 rounded" id="priority" checked={priority} onChange={e => setPriority(e.target.checked)} />
          <label htmlFor="priority" className="text-base sm:text-xl font-medium">Want to yo give your order priority?</label>
        </div>
        <button type="submit" className="cursor-pointer px-4 sm:px-6 bg-[#facc15] text-black font-semibold text-base sm:text-xl py-3 sm:py-4 rounded-full mt-2 sm:mt-4 hover:bg-yellow-300">
          ORDER NOW FROM €{total.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default New;
