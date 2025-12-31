import { Home, ShoppingCart, User, Package, Settings, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">DeeSmartTech</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <Home size={18} /> Home
            </a>
            <a href="/shop" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <ShoppingCart size={18} /> Shop
            </a>
            <a href="/services" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <Package size={18} /> Services
            </a>
            <a href="/orders" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <Package size={18} /> Orders
            </a>
            <a href="/profile" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <User size={18} /> Profile
            </a>
            <a href="/contact" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <Phone size={18} /> Contact
            </a>
            <a href="/settings" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <Settings size={18} /> Settings
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button id="mobile-menu-button" className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default, toggle with JS) */}
      <div id="mobile-menu" className="hidden md:hidden px-4 pb-4 space-y-2">
        <a href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Home size={18}/> Home</a>
        <a href="/shop" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><ShoppingCart size={18}/> Shop</a>
        <a href="/services" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Package size={18}/> Services</a>
        <a href="/orders" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Package size={18}/> Orders</a>
        <a href="/profile" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><User size={18}/> Profile</a>
        <a href="/contact" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Phone size={18}/> Contact</a>
        <a href="/settings" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><Settings size={18}/> Settings</a>
      </div>
    </nav>
  );
}
