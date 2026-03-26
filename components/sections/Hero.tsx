'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/hero-banner';
import Link from 'next/link';





export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[75vh] min-h-150 overflow-hidden bg-gray-900">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
              style={{
                backgroundImage: `url(${s.backgroundImage})`,
                animation: index === currentSlide ? 'ken-burns 20s ease-out infinite' : 'none'
              }}
            />
            {/* Dark Gradient Overlay - Stronger on left for text readability */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
            {/* Left Side - Content */}
            <div className="text-white z-10 py-12">
              {/* Badge */}
              {slide.badge && (
                <div className="inline-flex items-center space-x-2 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-slide-in-left">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-bold tracking-wide">{slide.badge}</span>
                </div>
              )}

              {/* Subtitle */}
              <p className="text-red-500 font-bold text-sm sm:text-base uppercase tracking-wider mb-3 animate-slide-in-left animation-delay-100">
                {slide.subtitle}
              </p>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 animate-slide-in-left animation-delay-200">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl animate-slide-in-left animation-delay-300">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              {/* CTA Buttons */}
<div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 animate-slide-in-left animation-delay-400">
  <Link
    href={slide.ctaPrimary.link}
    className="group inline-flex w-fit items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex-none"
  >
    <span>{slide.ctaPrimary.text}</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </Link>

  <Link
    href={slide.ctaSecondary.link}
    className="inline-flex w-fit items-center justify-center space-x-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition-all duration-300 flex-none"
  >
    <span>{slide.ctaSecondary.text}</span>
  </Link>
</div>

              {/* Features - Service Slides Only */}
              {slide.type === 'service' && (
                <div className="mt-10 flex flex-wrap gap-6 animate-slide-in-left animation-delay-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                    <span className="text-sm font-semibold">Trusted Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                    <span className="text-sm font-semibold">Quality Vehicles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                    <span className="text-sm font-semibold">Flexible Payment</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Product Image (Product Slide Only) */}
            {slide.type === 'product' && slide.productImage && (
              <div className="hidden lg:block relative animate-slide-in-right">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full transform scale-75" />
                  
                  {/* Product Image */}
                  <img
                    src={slide.productImage}
                    alt={slide.title}
                    className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <p className="text-xs font-bold uppercase">Special Offer</p>
                    <p className="text-2xl font-black">₦95M</p>
                  </div>

                  {/* Features Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-3 rounded-lg shadow-xl">
                    <p className="text-xs font-semibold text-gray-600">Starting from</p>
                    <p className="text-lg font-black text-red-600">5% Down Payment</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-600"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-600"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {HERO_SLIDES.map((s, index) => (
          <button
            key={s.id}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 ${
              index === currentSlide
                ? 'w-12 h-3 bg-red-600'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block animate-bounce">
        <div className="text-white text-sm font-semibold text-center">
          <p className="mb-2">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}