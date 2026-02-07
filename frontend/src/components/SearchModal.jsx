import { Search, X, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { productdata } from '../StoreComponents/images/StorePages/StoreContainer';
import { FiShoppingBag } from 'react-icons/fi'

export function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([])
  const searchItems = (searchTerm) => {
    setSearchQuery(searchTerm)
    const filteredData = productdata.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchQuery.toLowerCase())
    })
    setSearchResults(filteredData)
  }

  // Popular searches and categories
  const popularSearches = [
    'Gaming laptops',
    'RTX 4090',
    'iPhone 15 Pro',
    'Mechanical keyboards',
    'Wireless mouse',
    '4K monitors'
  ];

  const categories = [
    'Laptops and computers',
    'Computer components',
    'Smartphones and watches',
    'Gaming & streaming',
    'Peripherals',
    'Storage devices'
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal Content */}
      <div className="w-full max-w-3xl mt-20 mx-4">
        {/* Search Input */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-4 p-6 border-b border-gray-200">
            <Search size={24} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => searchItems(e.target.value)}
              autoFocus
              className="flex-1 text-lg outline-none placeholder-gray-400"
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Search Content */}
          <div className="p-6 max-h-[500px] overflow-y-auto">
            {searchQuery ? (
              // Search Results
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                  Search Results for "{searchQuery}"
                </h3>
                {/* <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <button
                      key={item}
                      className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition text-left"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-gray-400 text-xs">Product</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">
                          Sample Product {item} - {searchQuery}
                        </h4>
                        <p className="text-sm text-gray-500">Computer components</p>
                        <p className="text-lg font-bold text-[#00D991] mt-1">$299.99</p>
                      </div>
                    </button>
                  ))}
                </div> */}
                   {searchQuery ? <div className="product">
                                  {searchResults.slice(0, 5).map((item, idx)=> {
                                    const { image, descr, price} = item
                                    return (
                                        <div className='product-item' key={idx}>
                                            <p style={{display:"grid", gridTemplateColumns:"100%", position:'relative', right:'0'}}> <FiShoppingBag size="1.3em"/></p>
                                               <img src={image} alt={descr} width="100%" height="50%" id="recimg"/>
                                               <div className="descr">
                                               <p>{descr}</p>
                                               <h4><span >ksh. </span>{price}</h4>
                                            </div>
                                            </div>
                                    )
                                  })}      
                              </div>:
                               <div className="product">
                               
                                   <p>No products yet</p>
                               </div>
                    }
              </div>
            ) : (
              // Popular Searches & Categories
              <div className="space-y-6">
                {/* Popular Searches */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={18} className="text-[#00D991]" />
                    <h3 className="text-sm font-semibold text-gray-700 uppercase">
                      Popular Searches
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        className="px-4 py-2 bg-gray-100 hover:bg-[#00D991] hover:text-white rounded-full text-sm transition"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4">
                    Browse Categories
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="p-4 border border-gray-200 hover:border-[#00D991] hover:bg-[#00D991]/5 rounded-lg text-left transition group"
                      >
                        <span className="text-gray-800 group-hover:text-[#00D991] font-medium">
                          {category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Click outside hint */}
        <p className="text-center text-white/60 text-sm mt-4">
          Press ESC or click outside to close
        </p>
      </div>
    </div>
  );
}