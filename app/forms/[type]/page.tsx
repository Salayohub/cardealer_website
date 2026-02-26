'use client';

import { notFound } from 'next/navigation';
import LuxuryForm from '@/components/forms/Luxuryform';
import {
  productInquiryFields,
  importQuoteFields,
  carLoanFields,
  partQuoteFields,
  preOrderFields,
  carRequestFields
} from '@/lib/formConfigs';

import {
  Car,
  Globe,
  DollarSign,
  Wrench,
  ShoppingCart,
  Search
} from 'lucide-react';

// ============================================
// FORM TYPE DEFINITIONS
// ============================================

const FORM_TYPES = {
  'product-inquiry': {
    title: 'Product Inquiry',
    description: 'Interested in a specific vehicle? Let us know and our team will provide you with detailed information, pricing, and availability.',
    fields: productInquiryFields,
    icon: <Car />,
    color: '#dc2626'
  },
  'import-quote': {
    title: 'Import Quote Request',
    description: 'Looking to import a vehicle? Get a comprehensive quote including shipping, customs, and all associated costs.',
    fields: importQuoteFields,
    icon: <Globe />,
    color: '#2563eb'
  },
  'car-loan': {
    title: 'Car Loan Application',
    description: 'Drive your dream car today with flexible financing options. Apply now and get pre-approved within 48 hours.',
    fields: carLoanFields,
    icon: <DollarSign />,
    color: '#059669'
  },
  'part-quote': {
    title: 'Parts Quote Request',
    description: 'Need genuine auto parts? Request a quote and we will source the exact parts you need at competitive prices.',
    fields: partQuoteFields,
    icon: <Wrench />,
    color: '#ea580c'
  },
  'pre-order': {
    title: 'Pre-Order Vehicle',
    description: 'Reserve your next vehicle before it arrives. Customize every detail and secure your dream car today.',
    fields: preOrderFields,
    icon: <ShoppingCart />,
    color: '#7c3aed'
  },
  'car-request': {
    title: 'Custom Car Request',
    description: 'Tell us what you are looking for and we will find the perfect vehicle that matches your requirements and budget.',
    fields: carRequestFields,
    icon: <Search />,
    color: '#0891b2'
  }
} as const;

type FormType = keyof typeof FORM_TYPES;

interface PageProps {
  params: Promise<{ type: string }>; // ✅ Next 16
}

export default async function FormPage({ params }: PageProps) {
  const { type } = await params;

  const formType = type as FormType;
  const formConfig = FORM_TYPES[formType];

  if (!formConfig) {
    notFound();
  }

  const handleSubmit = async (data: Record<string, any>) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(`Form Type: ${formType}`);
    console.log('Form Data:', data);
  };

  return (
    <LuxuryForm
      title={formConfig.title}
      description={formConfig.description}
      fields={formConfig.fields}
      onSubmit={handleSubmit}
      submitLabel="Submit Request"
      icon={formConfig.icon}
      accentColor={formConfig.color}
    />
  );
}