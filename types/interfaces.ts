// types/interfaces.ts

import { ReactNode } from "react";
import  FormField from "@/components/forms/Luxuryform"

export interface Price {
  ngn: number;
  usd: number;
}

export interface Specifications {
  engine: string;
  horsepower: string;
  seats: number;
  doors: number;
  color: string;
  interiorColor: string;
  vin?: string;
}

export interface PaymentOptions {
  downPaymentPercentage: number;
  preOrderFeePercentage: number;
}

export interface ProductCardProps {
  product: Cars;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
  showQuickActions?: boolean;
}

export type CarStatus = 'available' | 'pre-order' | 'sold';
export type CarCondition = 'new' | 'used' | 'certified-pre-owned';

export interface Cars {
  id: string;
  title: string;
  name: string;
  slug: string;

  make: string;
  model: string;
  year: number;

  badge?: string;

  price: Price;

  images: string[];
  thumbnail?: string;

  status: CarStatus;
  category?: CarCategory;
  condition: CarCondition;

  mileage: number;
  transmission: 'automatic' | 'manual';
  fuelType: 'petrol' | 'diesel' | 'electric';

  description: string;
  features: string[];

  specifications: Specifications;

  paymentOptions: PaymentOptions;

  isFeatured?: boolean;
  isRecentlySold?: boolean;

  createdAt: string;
  updatedAt: string;
}

export type CarCategory = 'sedan' | 'suv' | 'truck' | 'coupe' | 'convertible' | 'hatchback' | 'wagon' | 'van' | 'electric' | 'luxury';

export interface CarListResponse {
  cars: Cars[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CarFilters {
  search?: string;
  category?: CarCategory;
  status?: 'available' | 'pre-order' | 'sold';
  condition?: CarCondition;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  make?: string;
  maxYear?: number;
  transmission?: 'automatic' | 'manual';
  fuelType?: string;
  page?: number;
  limit?: number;
}

export interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: {
    search?: string;
    category?: CarCategory;
    page?: string;
  };
}

export interface LatestProductsProps {
  initialProducts: Cars[];
}



// ============================================
// BLOG TYPES
// ============================================

export type BlogCategory = 'news' | 'tips' | 'reviews' | 'maintenance' | 'buying-guide';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: BlogCategory;
  tags: string[];
  featuredImage: string;
  readTime: number; // in minutes
  publishedAt: string;
  updatedAt: string;
  isFeatured: boolean;
}

export interface BlogListResponse {
  posts: BlogPost[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}



// ============================================
// HERO/BANNER TYPES
// ============================================

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  isActive: boolean;
  order: number;
}



export interface HeroSlide {
  id: number;
  type: 'service' | 'product';
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary: {
    text: string;
    link: string;
  };
  backgroundImage: string;
  productImage?: string; // For product promotion slide
  badge?: string; // Optional badge text
}

// ============================================
// TESTIMONIAL TYPES
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number; // 1-5
  comment: string;
  carPurchased: string;
  date: string;
}

// ============================================
// FORM TYPES
// ============================================

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface PreOrderFormData {
  name: string;
  email: string;
  phone: string;
  carId: string;
  carName: string;
  preferredPaymentMethod: 'full' | 'down-payment' | 'pre-order';
  message?: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface CompareRequest {
  name: string;
  email: string;
  phone: string;
  carIds: string[];
  message?: string;
}

// ============================================
// STATS/ANALYTICS TYPES
// ============================================

export interface CompanyStats {
  carsSold: number;
  happyClients: number;
  yearsInBusiness: number;
  availableCars: number;
}

// ============================================
// SETTINGS TYPES
// ============================================

export interface SiteSettings {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  address: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };
  exchangeRate: {
    usdToNgn: number;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  error: string;
  message: string;
  statusCode: number;
}

// ============================================
// SEARCH TYPES
// ============================================

export interface SearchSuggestion {
  type: 'car' | 'category' | 'make';
  value: string;
  label: string;
  count?: number;
}

export interface PopularSearch {
  query: string;
  count: number;
}

// ============================================
// CURRENCY TYPES
// ============================================

export type Currency = 'NGN' | 'USD';

export interface PriceDisplay {
  amount: number;
  currency: Currency;
  formatted: string;
}


/* ===============================
   SERVICE CARD / GRID TYPES
================================ */

/**
 * Used for:
 * - Home page services grid
 * - All services page
 * - Carousel cards
 */
export interface ServiceCard {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  iconBg: string;
  shortTitle?: string;
  isPopular?: boolean;
  features: ServiceFeature[];
}




export interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export interface Service{
id: string;
slug: string;
title: string;
shortTitle?: string;
description: string;
icon: string;
features: ServiceFeature[];
price?: {
  ngn: number;
  usd: number;
};
isPopular: boolean;
iconBg: string;
} 

export interface AllServices{
  id: string;
  slug: string;
  shortTitle: string;
  description: string;
  icon: string;
  iconBg: string;
  features: ServiceFeature[];
  badge?: string;
  
}

/* ===============================
   SHARED SUB-TYPES
================================ */

export interface CTA {
  text: string;
  link: string;
}

export interface Stat {
  label: string;
  value: string;
}


/* ===============================
   MAIN SERVICE DETAIL TYPE
================================ */

export interface ServiceDetail {
  id: string;
  slug: string;

  title: string;
  shortTitle: string;
  tagline: string;
  formType: string;
  description: string;
  longDescription: string;

  badge?: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  isPopular: boolean;
  images: string[];

  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  pricing?: ServicePricing[];
  stats?: Stat[];

  ctaPrimary: CTA;
  ctaSecondary: CTA;

  relatedServices: string[];
  testimonials?: string[];

  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}



/* ===============================
   SERVICE DETAIL SUB-TYPES
================================ */

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
  
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePricing {
  name: string;
  description: string;
  price?: {
    ngn: number;
    usd: number;
  };
  features: string[];
  highlighted?: boolean;
}

export interface OurServicesProps {
  services?: ServiceCard[];
  autoplay?: boolean;
  autoplayInterval?: number;
}



export interface LuxuryFormProps {
  title: string;              // Form heading
  description: string;        // Subtitle
  fields: FormField[];        // Array of field configs
  onSubmit: (data: any) => Promise<void>;  // Async handler
  submitLabel?: string;       // Button text
  icon?: ReactNode;           // Icon component
  accentColor?: string;       // Theme color
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select' | 'file' | 'date';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: (value: string) => string | null;
  accept?: string; // for file inputs
  rows?: number; // for textarea
  prefix?: string; // e.g., "₦" for price
  suffix?: string; // e.g., "months" for duration
}