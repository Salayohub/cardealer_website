'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

// ============================================
// TYPES
// ============================================

export interface ServiceCard {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  icon: string;
  iconBg: string;
  badge?: string;
  features?: string[];
}

// ============================================
// PROPS
// ============================================

interface Props extends ServiceCard {
  variant?: 'compact' | 'detailed' | 'featured';
  showFeatures?: boolean;
  className?: string;
  isHovered?: boolean;         // optional hover control from parent
  onHover?: () => void;        // optional callback on hover
  onLeave?: () => void;        // optional callback on leave
}

// ============================================
// SERVICE CARD COMPONENT
// ============================================

export function ServiceCard({
  id,
  slug,
  title,
  shortTitle,
  description,
  icon,
  iconBg,
  badge,
  features = [],
  variant = 'compact',
  showFeatures = true,
  className = '',
  isHovered,
  onHover,
  onLeave,
}: Props) {
  const [internalHover, setInternalHover] = useState(false);
  const hovered = isHovered !== undefined ? isHovered : internalHover;

  if (variant === 'compact') {
    return (
      <div
        onMouseEnter={() => {
          setInternalHover(true);
          onHover?.();
        }}
        onMouseLeave={() => {
          setInternalHover(false);
          onLeave?.();
        }}
        className={`group relative h-full ${className}`}
      >
        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02]">
          {/* Badge */}
          {badge && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {badge}
              </span>
            </div>
          )}

          {/* Hover Gradient */}
          <div
            className={`absolute inset-0 bg-linear-to-br ${iconBg} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
          />

          {/* Card Content */}
          <div className="relative p-8">
            {/* Icon */}
            <div className="mb-6">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${iconBg} rounded-xl shadow-lg transition-all duration-500 ${
                  hovered ? 'scale-110 rotate-6' : ''
                }`}
              >
                <span className="text-3xl">{icon}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
              {shortTitle || title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

            {/* Features */}
            {showFeatures && features.length > 0 && (
              <ul className="space-y-3 mb-6">
                {features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Learn More */}
            <Link
              href={`/services/${slug}`}
              className="inline-flex items-center space-x-2 text-red-600 font-bold hover:text-red-700"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // For detailed or featured variants, you can implement later
  return null;
}

// ============================================
// SKELETON / LOADING CARD
// ============================================

export function ServiceCardSkeleton({ variant = 'compact' }: { variant?: 'compact' | 'detailed' | 'featured' }) {
  if (variant === 'compact') {
    return (
      <div className="h-full bg-white rounded-2xl shadow-lg p-8 animate-pulse">
        <div className="w-16 h-16 bg-gray-200 rounded-xl mb-6" />
        <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />
        <div className="h-4 bg-gray-200 rounded mb-6 w-5/6" />
      </div>
    );
  }

  return null;
}
