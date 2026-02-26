import { FormField } from '@/types/interfaces'

// ============================================
// 1. PRODUCT INQUIRY FORM
// ============================================

export const productInquiryFields: FormField[] = [
  {
    name: 'vehicleName',
    label: 'Vehicle of Interest',
    type: 'text',
    placeholder: 'e.g., 2024 Toyota Camry',
    required: true
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'John',
    required: true
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Doe',
    required: true
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john.doe@example.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+234 801 234 5678',
    required: true
  },
  {
    name: 'preferredContact',
    label: 'Preferred Contact Method',
    type: 'select',
    required: true,
    options: [
      { value: 'phone', label: 'Phone Call' },
      { value: 'whatsapp', label: 'WhatsApp' },
      { value: 'email', label: 'Email' }
    ]
  },
  {
    name: 'message',
    label: 'Additional Information',
    type: 'textarea',
    placeholder: 'Tell us more about your requirements...',
    rows: 4
  }
];

// ============================================
// 2. IMPORT QUOTE FORM
// ============================================

export const importQuoteFields: FormField[] = [
  {
    name: 'vehicleMake',
    label: 'Vehicle Make',
    type: 'text',
    placeholder: 'e.g., Toyota, Honda, BMW',
    required: true
  },
  {
    name: 'vehicleModel',
    label: 'Vehicle Model',
    type: 'text',
    placeholder: 'e.g., Camry, Accord, X5',
    required: true
  },
  {
    name: 'vehicleYear',
    label: 'Year',
    type: 'number',
    placeholder: '2024',
    required: true,
    validation: (value) => {
      const year = parseInt(value);
      const currentYear = new Date().getFullYear();
      if (year < 2010 || year > currentYear + 1) {
        return `Year must be between 2010 and ${currentYear + 1}`;
      }
      return null;
    }
  },
  {
    name: 'importCountry',
    label: 'Import From',
    type: 'select',
    required: true,
    options: [
      { value: 'usa', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'germany', label: 'Germany' },
      { value: 'japan', label: 'Japan' },
      { value: 'canada', label: 'Canada' },
      { value: 'uae', label: 'United Arab Emirates' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    name: 'vehicleCondition',
    label: 'Vehicle Condition',
    type: 'select',
    required: true,
    options: [
      { value: 'new', label: 'Brand New' },
      { value: 'foreign-used', label: 'Foreign Used' }
    ]
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'John',
    required: true
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Doe',
    required: true
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john.doe@example.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+234 801 234 5678',
    required: true
  },
  {
    name: 'additionalInfo',
    label: 'Additional Requirements',
    type: 'textarea',
    placeholder: 'Any specific features, trim level, or requirements...',
    rows: 4
  }
];

// ============================================
// 3. CAR LOAN FORM
// ============================================

export const carLoanFields: FormField[] = [
  {
    name: 'vehiclePrice',
    label: 'Vehicle Price',
    type: 'number',
    placeholder: '5000000',
    prefix: '₦',
    required: true,
    validation: (value) => {
      const price = parseFloat(value);
      if (price < 1000000) {
        return 'Vehicle price must be at least ₦1,000,000';
      }
      return null;
    }
  },
  {
    name: 'downPayment',
    label: 'Down Payment',
    type: 'number',
    placeholder: '2000000',
    prefix: '₦',
    required: true,
    validation: (value) => {
      const payment = parseFloat(value);
      if (payment < 0) {
        return 'Down payment cannot be negative';
      }
      return null;
    }
  },
  {
    name: 'loanTerm',
    label: 'Loan Duration',
    type: 'select',
    required: true,
    options: [
      { value: '12', label: '12 Months' },
      { value: '18', label: '18 Months' },
      { value: '24', label: '24 Months' },
      { value: '36', label: '36 Months' },
      { value: '48', label: '48 Months' }
    ]
  },
  {
    name: 'employmentStatus',
    label: 'Employment Status',
    type: 'select',
    required: true,
    options: [
      { value: 'employed', label: 'Employed (Full-time)' },
      { value: 'self-employed', label: 'Self-Employed' },
      { value: 'business-owner', label: 'Business Owner' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    name: 'monthlyIncome',
    label: 'Monthly Income',
    type: 'number',
    placeholder: '500000',
    prefix: '₦',
    required: true,
    validation: (value) => {
      const income = parseFloat(value);
      if (income < 100000) {
        return 'Monthly income must be at least ₦100,000';
      }
      return null;
    }
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'John',
    required: true
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Doe',
    required: true
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john.doe@example.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+234 801 234 5678',
    required: true
  },
  {
    name: 'idDocument',
    label: 'Valid ID (Driver\'s License, NIN, etc.)',
    type: 'file',
    accept: 'image/*,.pdf',
    required: true
  }
];

// ============================================
// 4. PART QUOTE FORM
// ============================================

export const partQuoteFields: FormField[] = [
  {
    name: 'vehicleMake',
    label: 'Vehicle Make',
    type: 'text',
    placeholder: 'e.g., Toyota, Honda, BMW',
    required: true
  },
  {
    name: 'vehicleModel',
    label: 'Vehicle Model',
    type: 'text',
    placeholder: 'e.g., Camry, Accord, X5',
    required: true
  },
  {
    name: 'vehicleYear',
    label: 'Vehicle Year',
    type: 'number',
    placeholder: '2020',
    required: true
  },
  {
    name: 'partCategory',
    label: 'Part Category',
    type: 'select',
    required: true,
    options: [
      { value: 'engine', label: 'Engine & Transmission' },
      { value: 'electrical', label: 'Electrical System' },
      { value: 'suspension', label: 'Suspension & Steering' },
      { value: 'brakes', label: 'Brakes & Wheels' },
      { value: 'body', label: 'Body Parts & Panels' },
      { value: 'interior', label: 'Interior Parts' },
      { value: 'lights', label: 'Lights & Signals' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    name: 'partDescription',
    label: 'Part Description',
    type: 'textarea',
    placeholder: 'Describe the part you need in detail...',
    required: true,
    rows: 3
  },
  {
    name: 'quantity',
    label: 'Quantity',
    type: 'number',
    placeholder: '1',
    required: true,
    validation: (value) => {
      const qty = parseInt(value);
      if (qty < 1) {
        return 'Quantity must be at least 1';
      }
      return null;
    }
  },
  {
    name: 'urgency',
    label: 'Urgency',
    type: 'select',
    required: true,
    options: [
      { value: 'standard', label: 'Standard (7-14 days)' },
      { value: 'urgent', label: 'Urgent (3-5 days)' },
      { value: 'emergency', label: 'Emergency (1-2 days)' }
    ]
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'John',
    required: true
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Doe',
    required: true
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john.doe@example.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+234 801 234 5678',
    required: true
  },
  {
    name: 'partImage',
    label: 'Upload Part Photo (Optional)',
    type: 'file',
    accept: 'image/*'
  }
];

// ============================================
// 5. PRE-ORDER FORM
// ============================================

export const preOrderFields: FormField[] = [
  {
    name: 'vehicleMake',
    label: 'Vehicle Make',
    type: 'text',
    placeholder: 'e.g., Toyota, Honda, BMW',
    required: true
  },
  {
    name: 'vehicleModel',
    label: 'Vehicle Model',
    type: 'text',
    placeholder: 'e.g., Camry, Accord, X5',
    required: true
  },
  {
    name: 'vehicleYear',
    label: 'Model Year',
    type: 'number',
    placeholder: '2024',
    required: true
  },
  {
    name: 'trim',
    label: 'Trim / Variant',
    type: 'text',
    placeholder: 'e.g., XLE, Sport, M-Sport',
    required: false
  },
  {
    name: 'exteriorColor',
    label: 'Preferred Exterior Color',
    type: 'text',
    placeholder: 'e.g., Pearl White, Metallic Black',
    required: true
  },
  {
    name: 'interiorColor',
    label: 'Preferred Interior Color',
    type: 'text',
    placeholder: 'e.g., Black Leather, Beige Fabric',
    required: false
  },
  {
    name: 'additionalFeatures',
    label: 'Additional Features',
    type: 'textarea',
    placeholder: 'List any specific features or accessories you want...',
    rows: 3
  },
  {
    name: 'deliveryTimeline',
    label: 'Expected Delivery Timeline',
    type: 'select',
    required: true,
    options: [
      { value: '1-2months', label: '1-2 Months' },
      { value: '3-4months', label: '3-4 Months' },
      { value: '5-6months', label: '5-6 Months' },
      { value: 'flexible', label: 'Flexible' }
    ]
  },
  {
    name: 'paymentMethod',
    label: 'Payment Method',
    type: 'select',
    required: true,
    options: [
      { value: 'full', label: 'Full Payment' },
      { value: 'installment', label: 'Installment Plan' },
      { value: 'loan', label: 'Auto Loan' }
    ]
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'John',
    required: true
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Doe',
    required: true
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john.doe@example.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+234 801 234 5678',
    required: true
  }
];

// ============================================
// 6. CAR REQUEST FORM
// ============================================

export const carRequestFields: FormField[] = [
  {
    name: 'budget',
    label: 'Budget Range',
    type: 'select',
    required: true,
    options: [
      { value: '5-10m', label: '₦5M - ₦10M' },
      { value: '10-20m', label: '₦10M - ₦20M' },
      { value: '20-40m', label: '₦20M - ₦40M' },
      { value: '40-60m', label: '₦40M - ₦60M' },
      { value: '60m+', label: '₦60M+' }
    ]
  },
  {
    name: 'bodyType',
    label: 'Preferred Body Type',
    type: 'select',
    required: true,
    options: [
      { value: 'sedan', label: 'Sedan' },
      { value: 'suv', label: 'SUV' },
      { value: 'truck', label: 'Truck / Pickup' },
      { value: 'coupe', label: 'Coupe' },
      { value: 'van', label: 'Van / Minivan' },
      { value: 'hatchback', label: 'Hatchback' },
      { value: 'wagon', label: 'Station Wagon' },
      { value: 'convertible', label: 'Convertible' }
    ]
  },
  {
    name: 'fuelType',
    label: 'Preferred Fuel Type',
    type: 'select',
    required: true,
    options: [
      { value: 'petrol', label: 'Petrol / Gasoline' },
      { value: 'diesel', label: 'Diesel' },
      { value: 'electric', label: 'Electric' },
      { value: 'hybrid', label: 'Hybrid' },
      { value: 'flexible', label: 'No Preference' }
    ]
  },
  {
    name: 'transmission',
    label: 'Transmission',
    type: 'select',
    required: true,
    options: [
      { value: 'automatic', label: 'Automatic' },
      { value: 'manual', label: 'Manual' },
      { value: 'flexible', label: 'No Preference' }
    ]
  },
  {
    name: 'seats',
    label: 'Minimum Seats',
    type: 'select',
    required: true,
    options: [
      { value: '2', label: '2 Seats' },
      { value: '4', label: '4 Seats' },
      { value: '5', label: '5 Seats' },
      { value: '7', label: '7+ Seats' }
    ]
  },
  {
    name: 'usage',
    label: 'Primary Usage',
    type: 'select',
    required: true,
    options: [
      { value: 'personal', label: 'Personal / Family' },
      { value: 'business', label: 'Business / Corporate' },
      { value: 'commercial', label: 'Commercial / Transport' },
      { value: 'luxury', label: 'Luxury / Status' }
    ]
  },
  {
    name: 'mustHaveFeatures',
    label: 'Must-Have Features',
    type: 'textarea',
    placeholder: 'List any essential features (e.g., leather seats, sunroof, 4WD)...',
    rows: 3
  },
  {
    name: 'timeframe',
    label: 'Purchase Timeline',
    type: 'select',
    required: true,
    options: [
      { value: 'immediate', label: 'Immediately' },
      { value: '1month', label: 'Within 1 Month' },
      { value: '3months', label: 'Within 3 Months' },
      { value: 'researching', label: 'Just Researching' }
    ]
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'John',
    required: true
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Doe',
    required: true
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john.doe@example.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+234 801 234 5678',
    required: true
  }
];