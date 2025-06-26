import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, Plus } from 'lucide-react';
import { Product } from './types';

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    originalPrice: 129.99,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    category: "Electronics",
    rating: 4.8
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Advanced fitness tracker with heart rate monitoring and GPS",
    category: "Electronics",
    rating: 4.6
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Comfortable and sustainable organic cotton t-shirt in multiple colors",
    category: "Clothing",
    rating: 4.7
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Insulated water bottle keeps drinks cold for 24 hours, hot for 12 hours",
    category: "Lifestyle",
    rating: 4.9
  },
  {
    id: 5,
    name: "Wireless Phone Charger",
    price: 39.99,
    image: "https://images.pexels.com/photos/4526418/pexels-photo-4526418.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices",
    category: "Electronics",
    rating: 4.5
  },
  {
    id: 6,
    name: "Premium Coffee Beans",
    price: 24.99,
    image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Single-origin arabica coffee beans, freshly roasted",
    category: "Food",
    rating: 4.8
  },
  {
    id: 7,
    name: "Yoga Mat",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Non-slip eco-friendly yoga mat with carrying strap",
    category: "Fitness",
    rating: 4.6
  },
  {
    id: 8,
    name: "Desk Plant Collection",
    price: 19.99,
    image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Set of 3 small succulents perfect for your workspace",
    category: "Home",
    rating: 4.7
  }
];

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
  onViewCart: () => void;
  cartItemCount: number;
}

export default function ProductCatalog({ onAddToCart, onViewCart, cartItemCount }: ProductCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setAddedItems(prev => new Set([...prev, product.id]));
    
    // Remove the added state after 2 seconds
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop Now</h1>
          <p className="text-gray-600">Discover amazing products at great prices</p>
        </div>
        
        <button
          onClick={onViewCart}
          className="mt-4 md:mt-0 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>View Cart ({cartItemCount})</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="pl-10 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white appearance-none cursor-pointer min-w-[150px]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.originalPrice && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                  Sale
                </div>
              )}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-semibold">{product.rating}</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-2">
                <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 ${
                    addedItems.has(product.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg transform hover:scale-105'
                  }`}
                  disabled={addedItems.has(product.id)}
                >
                  <Plus className="w-4 h-4" />
                  <span>{addedItems.has(product.id) ? 'Added!' : 'Add'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}