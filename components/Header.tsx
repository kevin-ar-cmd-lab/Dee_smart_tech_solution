"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md bg-gray-50/80 transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg" : "py-4 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Dee Smart Tech Solutions
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/cart" className="hover:text-blue-600 transition">
            Cart
          </Link>
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex">
          <Link
            href="/login"
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger / Close */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-8 h-8 md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-8 bg-gray-700 transition-transform duration-300 ${
              menuOpen ? "rotate-45 top-4" : "top-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-8 bg-gray-700 transition-opacity duration-300 top-4 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-8 bg-gray-700 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 top-4" : "top-6"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50/90 backdrop-blur-md border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 gap-4 text-gray-700 font-medium">
            <Link href="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="/cart" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>
            <Link
              href="/login"
              className="mt-2 px-4 py-2 border border-gray-300 rounded text-center"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
