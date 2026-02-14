import { ArrowRight, Cpu, Zap, Shield } from "lucide-react";
import navbarImage from "../StoreComponents/images/someplant.png";

export function Footer() {
  return (
    <footer className="w-full bg-[#17265a] text-white relative overflow-hidden mt-20">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32">
          <Cpu size={128} className="text-[#BD1E1E]" />
        </div>
        <div className="absolute bottom-20 right-40 w-24 h-24">
          <Zap size={96} className="text-[#BD1E1E]" />
        </div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20">
          <Shield size={80} className="text-[#BD1E1E]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Section - Logo & Description */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-3">
            <div className="flex items-center mb-4">
              <img
                src={navbarImage}
                alt="ECLUSO"
                className="h-10"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop destination for cutting-edge
              technology. We deliver innovation to your doorstep
              with lightning-fast service.
            </p>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/shop"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Laptops & Computers
                </a>
              </li>
              <li>
                <a
                  href="/inventory"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="/orders"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Smartphones
                </a>
              </li>
              <li>
                <a
                  href="/customers"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Gaming Gear
                </a>
              </li>
              <li>
                <a
                  href="/orders"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="inventory"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="orders"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/orders"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="admin"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="/dash"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Warranty
                </a>
              </li>
              <li>
                <a
                  href="/orders"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/dash"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/dash"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/dash"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/dash"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="/dash"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-gray-400 hover:text-[#BD1E1E] transition text-sm"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-3 xl:col-span-3">
            <div className="bg-[#18206F] rounded-2xl p-5 md:p-6 lg:p-8">
              <span className="text-[#BD1E1E] text-xs font-bold uppercase tracking-wider">
                Newsletter
              </span>
              <h3 className="text-xl md:text-2xl font-bold mt-2 mb-3 md:mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm mb-4 md:mb-5">
                Get the latest tech deals and product launches
                delivered to your inbox.
              </p>
              <div className="flex items-center bg-[#1a1a1a] rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none"
                />
                <button className="w-12 h-12 bg-[#F5E2C8] rounded-full flex items-center justify-center hover:bg-[#BD1E1E] transition mr-1 flex-shrink-0">
                  <ArrowRight
                    size={20}
                    className="text-[#1a1a1a]"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Icons Decoration - Bottom */}
        <div className="mt-12 md:mt-16 lg:mt-20 mb-8 md:mb-10 lg:mb-12 flex items-center justify-center gap-6 md:gap-8 lg:gap-12 opacity-20">
          <div className="w-16 h-16 border-2 border-[#FCF6EE] rounded-lg flex items-center justify-center rotate-12">
            <Cpu size={32} className="text-[#FCF6EE]" />
          </div>
          <div className="w-20 h-20 border-2 border-[#FCF6EE] rounded-full flex items-center justify-center">
            <Zap size={40} className="text-[#FCF6EE]" />
          </div>
          <div className="w-16 h-16 border-2 border-[#FCF6EE] rounded-lg flex items-center justify-center -rotate-12">
            <Shield size={32} className="text-[#FCF6EE]" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 lg:pt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              © 2026 SCOPE Technologies Inc. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm">
              <a
                href="/cart"
                className="text-gray-500 hover:text-[#BD1E1E] transition"
              >
                Privacy Policy
              </a>
              <a
                href="/shop"
                className="text-gray-500 hover:text-[#BD1E1E] transition"
              >
                Terms of Use
              </a>
              <a
                href="/dash"
                className="text-gray-500 hover:text-[#BD1E1E] transition"
              >
                Cookies Policy
              </a>
              <a
                href="/dash"
                className="text-gray-500 hover:text-[#BD1E1E] transition"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}