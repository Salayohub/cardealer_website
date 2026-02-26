'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  Share2, 
  Calendar, 
  Gauge, 
  Fuel, 
  Settings,
  Car,
  Shield,
  CheckCircle,
  Phone,
  MessageCircle,
  Mail,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Calculator,
  Download,
  Eye,
  ArrowRightLeft,
  Star,
  MapPin,
  Clock
} from 'lucide-react';
import { Cars } from '@/types/interfaces';

interface ProductClientProps {
  product: Cars;
}

export default function ProductClient({ product }: ProductClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'specs' | 'financing'>('overview');
  
  // Financing calculator state
  const [downPayment, setDownPayment] = useState(product.paymentOptions.downPaymentPercentage);
  const [loanTerm, setLoanTerm] = useState(24);
  const [interestRate, setInterestRate] = useState(12);

  // Calculate financing
  const downPaymentAmount = (product.price.ngn * downPayment) / 100;
  const loanAmount = product.price.ngn - downPaymentAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) / (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);

  // Format currency
  const formatPrice = (amount: number, currency: 'NGN' | 'USD' = 'NGN'): string => {
    if (currency === 'NGN') {
      return `₦${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${amount.toLocaleString()}`;
  };

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share failed:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-red-600 transition-colors">
              Cars
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to All Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-4/3 bg-gray-100 rounded-2xl overflow-hidden group">
              <Image
                src={product.images[currentImageIndex]}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                {product.badge && (
                  <span className="bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    {product.badge}
                  </span>
                )}
                <span className={`text-sm font-bold px-4 py-2 rounded-full shadow-lg ${
                  product.condition === 'new' 
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : product.condition === 'certified-pre-owned'
                    ? 'bg-purple-100 text-purple-800 border border-purple-200'
                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                }`}>
                  {product.condition === 'new' ? 'New' : product.condition === 'certified-pre-owned' ? 'Certified' : 'Used'}
                </span>
              </div>

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                  </button>
                </>
              )}

              {/* Fullscreen Button */}
              <button
                onClick={() => setShowFullImage(true)}
                className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
              >
                <Eye className="w-5 h-5 text-gray-900" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                {currentImageIndex + 1} / {product.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-4/3 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'border-red-600 ring-2 ring-red-200' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 25vw, 12vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span>{product.year}</span>
                <span>•</span>
                <span className="capitalize">{product.category}</span>
                {product.status === 'available' && (
                  <>
                    <span>•</span>
                    <span className="flex items-center space-x-1 text-green-600 font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Available</span>
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-linear-to-br from-red-50 to-white border-2 border-red-100 rounded-2xl p-6">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Price</p>
                  <p className="text-4xl font-black text-gray-900">
                    {formatPrice(product.price.ngn)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatPrice(product.price.usd, 'USD')}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Down Payment</p>
                  <p className="text-2xl font-black text-red-600">
                    {product.paymentOptions.downPaymentPercentage}%
                  </p>
                  <p className="text-xs text-gray-500 mt-1">From</p>
                </div>
              </div>

              {product.status === 'pre-order' && (
                <div className="bg-orange-100 border border-orange-200 rounded-lg p-3">
                  <p className="text-sm font-semibold text-orange-800">
                    Pre-order with only {product.paymentOptions.preOrderFeePercentage}% deposit
                  </p>
                </div>
              )}
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Mileage</p>
                    <p className="font-black text-gray-900">
                      {product.mileage === 0 ? 'Brand New' : `${product.mileage.toLocaleString()} km`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Transmission</p>
                    <p className="font-black text-gray-900 capitalize">
                      {product.transmission}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Fuel className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Fuel Type</p>
                    <p className="font-black text-gray-900 capitalize">
                      {product.fuelType}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Seats</p>
                    <p className="font-black text-gray-900">
                      {product.specifications.seats} Passengers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href={`/forms/product-inquiry?product=${product.slug}`}
                className="w-full inline-flex items-center justify-center space-x-2 bg-linear-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Request Information</span>
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:+2341234567890`}
                  className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold hover:border-red-600 hover:text-red-600 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/2341234567890?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 inline-flex items-center justify-center space-x-2 border-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    isWishlisted
                      ? 'bg-red-50 border-red-600 text-red-600'
                      : 'bg-white border-gray-200 text-gray-900 hover:border-red-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  <span>{isWishlisted ? 'Saved' : 'Save'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold hover:border-gray-400 transition-all duration-300"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'features', label: 'Features' },
                { id: 'specs', label: 'Specifications' },
                { id: 'financing', label: 'Financing Calculator' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-2 border-b-2 font-bold text-sm whitespace-nowrap transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-12">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Vehicle Overview</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Make</span>
                      <span className="text-gray-900 font-bold">{product.make}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Model</span>
                      <span className="text-gray-900 font-bold">{product.model}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Year</span>
                      <span className="text-gray-900 font-bold">{product.year}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Body Type</span>
                      <span className="text-gray-900 font-bold capitalize">{product.category}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Exterior Color</span>
                      <span className="text-gray-900 font-bold">{product.specifications.color}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Interior Color</span>
                      <span className="text-gray-900 font-bold">{product.specifications.interiorColor}</span>
                    </div>
                    {product.specifications.vin && (
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600 font-semibold">VIN</span>
                        <span className="text-gray-900 font-mono text-sm">{product.specifications.vin}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Performance</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Engine</span>
                      <span className="text-gray-900 font-bold">{product.specifications.engine}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Horsepower</span>
                      <span className="text-gray-900 font-bold">{product.specifications.horsepower}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Transmission</span>
                      <span className="text-gray-900 font-bold capitalize">{product.transmission}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Fuel Type</span>
                      <span className="text-gray-900 font-bold capitalize">{product.fuelType}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Doors</span>
                      <span className="text-gray-900 font-bold">{product.specifications.doors}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-semibold">Seats</span>
                      <span className="text-gray-900 font-bold">{product.specifications.seats}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">Key Features & Equipment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-red-200 hover:bg-red-50 transition-all duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specs' && (
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">Complete Specifications</h3>
                <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Make & Model</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{product.make} {product.model}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Year</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{product.year}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Condition</td>
                        <td className="px-6 py-4 text-gray-900 font-bold capitalize">{product.condition}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Mileage</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">
                          {product.mileage === 0 ? 'Brand New (0 km)' : `${product.mileage.toLocaleString()} km`}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Engine</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{product.specifications.engine}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Horsepower</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{product.specifications.horsepower}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Transmission</td>
                        <td className="px-6 py-4 text-gray-900 font-bold capitalize">{product.transmission}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Fuel Type</td>
                        <td className="px-6 py-4 text-gray-900 font-bold capitalize">{product.fuelType}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Body Type</td>
                        <td className="px-6 py-4 text-gray-900 font-bold capitalize">{product.category}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Doors</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{product.specifications.doors}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Seats</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{product.specifications.seats}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Exterior Color</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{product.specifications.color}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 font-semibold">Interior Color</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{product.specifications.interiorColor}</td>
                      </tr>
                      {product.specifications.vin && (
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-gray-600 font-semibold">VIN</td>
                          <td className="px-6 py-4 text-gray-900 font-mono text-sm">{product.specifications.vin}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Financing Calculator Tab */}
            {activeTab === 'financing' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-black text-gray-900 mb-6">Financing Calculator</h3>
                
                <div className="bg-linear-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Down Payment */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Down Payment: {downPayment}%
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="100"
                        step="5"
                        value={downPayment}
                        onChange={(e) => setDownPayment(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>5%</span>
                        <span className="font-bold text-gray-900">
                          ₦{(downPaymentAmount / 1000000).toFixed(2)}M
                        </span>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* Loan Term */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Loan Term: {loanTerm} months
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="36"
                        step="6"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>12 mo</span>
                        <span className="font-bold text-gray-900">{loanTerm} months</span>
                        <span>36 mo</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Interest Rate: {interestRate}% p.a.
                      </label>
                      <input
                        type="range"
                        min="8"
                        max="20"
                        step="1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>8%</span>
                        <span className="font-bold text-gray-900">{interestRate}% per annum</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">Down Payment</p>
                      <p className="text-3xl font-black text-gray-900">
                        ₦{(downPaymentAmount / 1000000).toFixed(2)}M
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">Loan Amount</p>
                      <p className="text-3xl font-black text-gray-900">
                        ₦{(loanAmount / 1000000).toFixed(2)}M
                      </p>
                    </div>

                    <div className="bg-linear-to-br from-red-600 to-red-700 rounded-xl p-6 text-center text-white">
                      <p className="text-sm text-white/80 mb-2">Monthly Payment</p>
                      <p className="text-3xl font-black">
                        ₦{(monthlyPayment / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-100 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-900">
                      <strong>Note:</strong> This is an estimate. Final terms and rates are subject to credit approval. 
                      Contact us for personalized financing options.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {showFullImage && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setShowFullImage(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-6xl w-full aspect-16/10">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}