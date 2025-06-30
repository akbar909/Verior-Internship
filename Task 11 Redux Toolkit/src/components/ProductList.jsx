import { products } from '../data/product'
import ProductCard from './ProductCard'

const ProductList = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList