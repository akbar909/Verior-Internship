import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { addItem } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const haddleaddtoCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
    toast.success(`${product.name} added to cart!`);
  };
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-900 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-blue-600 font-bold text-lg">
            ${product.price}
          </span>
          <button
            onClick={haddleaddtoCart}
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;