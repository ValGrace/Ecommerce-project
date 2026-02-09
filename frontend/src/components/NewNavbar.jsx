import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  ChevronDown,
  Menu,
  Truck,
  Clock,
  Headphones,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Monitor,
  Cpu,
  Smartphone,
  Gamepad2
} from 'lucide-react';
import { SearchModal } from './SearchModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);



  const cart = useSelector((state) => state.cart);

  const getTotalProducts = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <nav className="w-full">
      {/* Top Bar - Desktop Only */}
      <div className="hidden md:block bg-[#BD1E1E] text-[#F5E2C8] text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Truck size={16} />
              <span>Fast delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Pickup in one hour</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones size={16} />
              <span>Technical Support</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Facebook size={16} className="cursor-pointer hover:text-gray-300 transition" />
            <Twitter size={16} className="cursor-pointer hover:text-gray-300 transition" />
            <Youtube size={16} className="cursor-pointer hover:text-gray-300 transition" />
            <Instagram size={16} className="cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#F5E2C8] text-[#17255A]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Link to="/dash" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#BD1E1E] rounded flex items-center justify-center">
                <span className="text-black font-bold text-lg">2</span>
              </div>
              <span className="text-xl font-bold">SCOPE</span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-[600px] items-center bg-[#2c2c548b] rounded-full overflow-hidden border border-gray-500 shadow-xl">
              <input
                type="text"
                placeholder="Search products"
                onClick={() => setSearchModalOpen(true)}

                className="flex-1 px-5 py-3 bg-transparent text-black text-sm placeholder-gray-400 focus:outline-none border-[#b6b6b596] shadow-xl"
              />
              <div className="relative flex items-center pr-3">
                <div className="h-4 w-px bg-[#18206F] mr-3"></div>
                <select className="appearance-none h-full pl-3 pr-8 bg-transparent text-[#D88373] text-sm cursor-pointer focus:outline-none">
                  <option value="">All categories</option>
                  <option value="laptops">Laptops</option>
                  <option value="components">Components</option>
                  <option value="smartphones">Smartphones</option>
                  <option value="gaming">Gaming</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-50" />
              </div>
              <button className="w-12 h-12 mr-1 bg-black rounded-full hover:bg-gray-900 transition flex items-center justify-center" onClick={() => setSearchModalOpen(true)}>
                <Search size={20} strokeWidth={2} className="text-white" />
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Need Help - Desktop Only */}


              {/* Account - Desktop */}
              <Link to="/login" className="hidden md:flex items-center gap-2 hover:text-[#A40E4C] transition">
                <User size={30} />
                <span className='text-lg'>Account</span>
              </Link>

              {/* Wishlist */}
              <button className="relative hover:text-[#D88373] transition">
                <Heart size={30} />
              </button>

              {/* Cart */}
              <Link to="/checkout" className="flex items-center gap-2 hover:text-[#D88373] transition">
                <div className="relative">
                  <ShoppingCart size={30} />
                  {getTotalProducts() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#D88373] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getTotalProducts()}
                    </span>
                  )}
                </div>
                {/* <span className="hidden md:inline font-semibold">$68.98</span> */}
              </Link>

              {/* Mobile User Icon */}
              <Link to="/login" className="md:hidden">
                <User size={20} />
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden mt-3 flex gap-2">
            <input
              type="text"
              placeholder="Search products"
              className="flex-1 px-4 py-2 bg-[#2C2C54] text-white placeholder-gray-400 rounded focus:outline-none"
              onClick={() => setSearchModalOpen(true)}
            />
            <button className="px-4 py-2 bg-[#00D991] text-black rounded hover:bg-[#D88373] transition" onClick={() => setSearchModalOpen(true)}>
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation - Desktop Only */}
      <div className="hidden md:block bg-[#18206F] text-[#F5E2C8] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8 py-3">
            <Link to="/mystore" className="flex items-center gap-2 hover:text-[#D88373] transition">
              <Monitor size={18} />
              <span>Laptops and computers</span>
            </Link>
            <Link to="/mystore" className="flex items-center gap-2 hover:text-[#D88373] transition">
              <Cpu size={18} />
              <span>Computer components</span>
            </Link>
            <Link to="/mystore" className="flex items-center gap-2 hover:text-[#D88373] transition">
              <Smartphone size={18} />
              <span>Smartphones and watches</span>
            </Link>
            <Link to="/mystore" className="flex items-center gap-2 hover:text-[#D88373] transition">
              <Gamepad2 size={18} />
              <span>Gaming & streaming</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18206F] text-white border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <Link to="/mystore" className="flex items-center gap-2 w-full hover:text-[#D88373] transition">
              <Monitor size={18} />
              <span>Laptops and computers</span>
            </Link>
            <Link to="/mystore" className="flex items-center gap-2 w-full hover:text-[#D88373] transition">
              <Cpu size={18} />
              <span>Computer components</span>
            </Link>
            <Link to="/mystore" className="flex items-center gap-2 w-full hover:text-[#D88373] transition">
              <Smartphone size={18} />
              <span>Smartphones and watches</span>
            </Link>
            <Link to="/mystore" className="flex items-center gap-2 w-full hover:text-[#D88373] transition">
              <Gamepad2 size={18} />
              <span>Gaming & streaming</span>
            </Link>
            <div className="pt-4 border-t border-gray-800">
              <Link to="/login" className="flex items-center gap-2 w-full hover:text-[#D88373] transition">
                <User size={18} />
                <span>Account</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </nav>
  );
}
