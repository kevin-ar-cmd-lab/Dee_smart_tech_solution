import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyPlatform
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/cart" className="hover:text-blue-600">
            Cart
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Login
          </Link>
        </div>

      </div>
    </header>
  )
}
