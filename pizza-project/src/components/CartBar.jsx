import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartBar = () => {
  const items = useSelector(state => state.cart.items);
  const navigate = useNavigate();
  if (!items.length) return null;
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#facc15] flex items-center justify-between py-2 shadow-lg z-50 px-6">
      <span className="font-bold text-lg mr-4">{totalQty} pizza{totalQty > 1 ? 's' : ''} • €{total.toFixed(2)}</span>
      <button
        className="cursor-pointer bg-black text-yellow-400 font-bold px-6 py-2 rounded-full ml-4"
        onClick={() => navigate('/cart')}
      >
        Open Cart
      </button>
    </div>
  );
};

export default CartBar;
