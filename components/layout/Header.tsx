'use client';

import { useState, useEffect } from 'react';
import { Search, Phone, Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  // ------------------- Hooks -------------------
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cars', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleCurrencyChange = (newCurrency: 'NGN' | 'USD') => {
    setCurrency(newCurrency);
    setIsCurrencyDropdownOpen(false);
    window.dispatchEvent(new CustomEvent('currencyChange', { detail: newCurrency }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/cars?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  // ------------------- Render -------------------
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-red-600 text-white overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap py-2 px-4">
          <span className="inline-block mr-16 text-sm font-medium tracking-wide">
            🏆 Nigeria's Number One Car Dealer - Premium Quality, Trusted Service
          </span>
          <span className="inline-block mr-16 text-sm font-medium tracking-wide">
            🚗 Pre-Order Your Dream Car Today - Only 5% Down Payment
          </span>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg border-b border-gray-100' : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center group">
              <div className="relative w-30 h-20 mr-3 
              transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/assets/logo/new-logo1.png"
                  fill
                  alt="Excellent J & C Autos Logo"
                  sizes="(max-width: 768px) 120px, 180px"
                  priority
                  className="object-contain rounded-lg shadow-md"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <span>{currency === 'NGN' ? '₦' : '$'}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* {isCurrencyDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 animate-fade-in">
                    <button
                      onClick={() => handleCurrencyChange('NGN')}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                        currency === 'NGN' ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      ₦ Naira (NGN)
                    </button>
                    <button
                      onClick={() => handleCurrencyChange('USD')}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                        currency === 'USD' ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      $ Dollar (USD)
                    </button>
                  </div>
                )}
              </div> */}

              
</div>
              <a
                href="https://wa.me/2341234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-26 bg-white z-40 overflow-y-auto animate-slide-in-right">
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                      isActive ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
