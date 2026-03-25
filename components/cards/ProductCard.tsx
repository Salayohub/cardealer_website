'use client';

import { useState } from 'react';
import {
  Heart,
  ArrowRight,
  Gauge,
  Fuel,
  Settings,
  Calendar,
  Star,
  LucideArrowRightLeft,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Cars,  } from '@/types/interfaces';
import { ProductCardProps}  from '@/types/interfaces';


// ===============================
// HELPERS
// ===============================

function formatPrice(amount: number, currency: 'NGN' | 'USD' = 'NGN') {
  if (currency === 'NGN') return `₦${(amount / 1_000_000).toFixed(1)}M`;
  return `$${amount.toLocaleString()}`;
}

function getConditionBadge(condition: Cars['condition']) {
  const map = {
    new: 'bg-green-100 text-green-800 border-green-200',
    used: 'bg-blue-100 text-blue-800 border-blue-200',
    'certified-pre-owned':
      'bg-purple-100 text-purple-800 border-purple-200'
  };
  return map[condition] ?? map.new;
}

// ===============================
// COMPONENT
// ===============================

export default function ProductCard({
  product,
  variant = 'default',
  className = '',
  showQuickActions = true
}: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);

  // ===============================
  // COMPACT CARD
  // ===============================
  if (variant === 'compact') {
    return (
      <Link
        href={`/products/${product.slug}`}
        className={`group block rounded-xl border-2 border-gray-200 bg-white hover:border-red-600 hover:shadow-lg transition ${className}`}
      >
        <div className="relative aspect-4/3">
          <Image
            src={product.thumbnail ?? product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform"
          />
        </div>

        <div className="p-4">
          <h3 className="font-bold text-gray-900 group-hover:text-red-600 line-clamp-1">
            {product.name}
          </h3>

          <div className="flex justify-between items-center mt-2">
            <p className="text-xl font-black">
              {formatPrice(product.price.ngn)}
            </p>
            <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition" />
          </div>
        </div>
      </Link>
    );
  }

  // ===============================
  // DEFAULT / FEATURED CARD
  // ===============================
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative block rounded-2xl border-2 border-gray-200 bg-white hover:border-red-600 hover:shadow-xl transition overflow-hidden ${className}`}
    >
      {/* IMAGE */}
      <div className="relative aspect-4/3 bg-gray-100">
        <Image 
        src={product.thumbnail ?? product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"/>

        {/* BADGES */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.badge && (
            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
              {product.badge}
            </span>
          )}
          <span
            className={`text-xs px-2 py-1 rounded-full border font-bold ${getConditionBadge(
              product.condition
            )}`}
          >
            {product.condition}
          </span>
        </div>

        {/* QUICK ACTIONS */}
        {showQuickActions && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setWishlisted(!wishlisted);
            }}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur border transition ${
              wishlisted
                ? 'bg-red-600 text-white'
                : 'bg-white/30 text-white hover:bg-red-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
          </button>
        )}

        {product.isRecentlySold && (
          <div className="absolute bottom-3 left-3">
            <span className="flex items-center gap-1 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-bold">
              <Star className="w-3 h-3 fill-current" />
              Recently Sold
            </span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-xs text-gray-500 uppercase">
          {product.year} • {product.category}
        </p>

        <h3 className="mt-1 text-lg font-black text-gray-900 group-hover:text-red-600 transition line-clamp-2">
          {product.name}
        </h3>

        {/* SPECS */}
        <div className="flex gap-4 text-sm text-gray-600 mt-4 pb-4 border-b">
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4" />
            {product.mileage === 0 ? 'New' : `${product.mileage}km`}
          </div>
          <div className="flex items-center gap-1">
            <Settings className="w-4 h-4" />
            {product.transmission}
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            {product.fuelType}
          </div>
        </div>

        {/* PRICE */}
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="text-2xl font-black">
              {formatPrice(product.price.ngn)}
            </p>
            <p className="text-xs text-gray-500">
              {formatPrice(product.price.usd, 'USD')}
            </p>
          </div>

          <div className="flex items-center gap-1 text-red-600 font-bold group-hover:translate-x-1 transition">
            View
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}   



export function ProductCardSkeleton() {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden animate-pulse">
      {/* Image */}
      <div className="relative aspect-16/10 bg-gray-200" />

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div className="h-5 bg-gray-200 rounded w-3/4" />

        {/* Specs row */}
        <div className="flex items-center gap-4">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-16" />
          <div className="h-4 bg-gray-200 rounded w-14" />
        </div>

        {/* Price */}
        <div className="h-6 bg-gray-300 rounded w-1/2" />

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <div className="h-10 bg-gray-200 rounded-lg flex-1" />
          <div className="h-10 bg-gray-200 rounded-lg w-12" />
        </div>
      </div>
    </div>
  );
}

