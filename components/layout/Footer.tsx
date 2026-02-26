'use client';

import { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
      setIsSubscribing(false);

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubscribeStatus('idle');
      }, 3000);
    }, 1000);
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cars', href: '/cars' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const carCategories = [
    { name: 'Sedans', href: '/cars?category=sedan' },
    { name: 'SUVs', href: '/cars?category=suv' },
    { name: 'Luxury Cars', href: '/cars?category=luxury' },
    { name: 'Electric Cars', href: '/cars?category=electric' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Desktop: 3-column grid | Mobile: Stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Logo + Description + Social (Desktop: 4 cols | Mobile: full width) */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group mb-4">
              <div className="relative w-12 h-12 mr-3 transition-transform duration-300 group-hover:scale-110">
                <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-black text-xl">JC</span>
                </div>
              </div>
              <div>
                <div className="text-xl font-black text-white tracking-tight leading-none">
                  Excellent J & C
                </div>
                <div className="text-xs text-gray-400 font-medium tracking-wider">
                  AUTOS
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nigeria's #1 trusted car dealer. We provide premium quality vehicles with 
              flexible payment options and exceptional customer service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a 
                href="tel:+2341234567890" 
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+234 123 456 7890</span>
              </a>
              <a 
                href="mailto:info@excellentjc.com" 
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@excellentjc.com</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Auto Plaza, Victoria Island, Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (Desktop: 3 cols | Mobile: full width) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm font-medium inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2.5: Car Categories (Desktop: 2 cols | Mobile: full width) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              {carCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm font-medium inline-block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter (Desktop: 3 cols | Mobile: full width) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest car deals and updates.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none text-white placeholder-gray-500 text-sm transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSubscribing || subscribeStatus === 'success'}
                className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-3 rounded-lg font-semibold text-sm hover:bg-red-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : subscribeStatus === 'success' ? (
                  <>
                    <span>✓ Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>

              {subscribeStatus === 'success' && (
                <p className="text-green-400 text-xs animate-fade-in">
                  Thank you for subscribing! Check your inbox.
                </p>
              )}
            </form>

            {/* Social Links - Mobile */}
            <div className="flex md:hidden items-center space-x-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Excellent J & C Autos. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-500 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
}