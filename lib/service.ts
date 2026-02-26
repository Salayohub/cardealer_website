// ============================================
// OUR SERVICES DATA
// ============================================
// Comprehensive data for all services offered by Excellent J & C Autos

import { Service, ServiceDetail } from '@/types/interfaces';
import { FormField } from '@/types/interfaces';
// ============================================
// SERVICE 1: CAR SALES
// ============================================
export const ALL_SERVICES: ServiceDetail[] = [

 {
  id: 'car-sales',
  slug: 'car-sales',
  title: 'Premium Car Sales',
  formType: 'product-inquiry',
  shortTitle: 'Car Sales',
  tagline: 'Quality New & Used Vehicles',
  description: 'Premium selection of quality new and certified pre-owned vehicles from trusted brands.',
  longDescription: `At Excellent J & C Autos, we pride ourselves on offering the finest selection of new and certified pre-owned vehicles in Nigeria. Each vehicle in our inventory undergoes rigorous inspection to ensure it meets our strict quality standards. Whether you're looking for a luxury sedan, a family SUV, or a reliable commuter car, we have the perfect vehicle for you.

Our commitment to transparency means you'll always know exactly what you're getting. We provide detailed vehicle history reports, comprehensive inspections, and honest pricing. Our experienced sales team is here to guide you through every step of the buying process, ensuring you drive away completely satisfied.`,
  icon: '🚗',
  iconBg: 'from-red-500 to-red-600',
  iconColor: 'text-white',
  badge: 'Popular',
  isPopular: true,
  images: [
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
    'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=1200'
  ],
  features: [
    {
      icon: '✓',
      title: 'Wide Selection',
      description: 'Extensive inventory of new and pre-owned vehicles from all major brands'
    },
    {
      icon: '✓',
      title: 'Certified Pre-Owned',
      description: 'All used vehicles undergo rigorous 150-point inspection'
    },
    {
      icon: '✓',
      title: 'Transparent Pricing',
      description: 'No hidden fees - clear, upfront pricing on all vehicles'
    },
    {
      icon: '✓',
      title: 'Vehicle History',
      description: 'Comprehensive history reports for all pre-owned vehicles'
    }
  ],
  benefits: [
    {
      title: 'Quality Assurance',
      description: 'Every vehicle is thoroughly inspected and comes with our quality guarantee'
    },
    {
      title: 'Competitive Pricing',
      description: 'Best prices in the market with flexible payment options'
    },
    {
      title: 'Expert Guidance',
      description: 'Knowledgeable sales team to help you find the perfect vehicle'
    },
    {
      title: 'After-Sales Support',
      description: 'Continued support even after your purchase'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Browse Inventory',
      description: 'Explore our extensive collection online or visit our showroom'
    },
    {
      step: 2,
      title: 'Test Drive',
      description: 'Schedule a test drive to experience your preferred vehicle'
    },
    {
      step: 3,
      title: 'Financing Options',
      description: 'Discuss flexible payment plans that suit your budget'
    },
    {
      step: 4,
      title: 'Documentation',
      description: 'We handle all paperwork and registration processes'
    },
    {
      step: 5,
      title: 'Drive Home',
      description: 'Take delivery of your new vehicle and enjoy the road'
    }
  ],
  faqs: [
    {
      question: 'Do you offer warranties on used cars?',
      answer: 'Yes! All our certified pre-owned vehicles come with a comprehensive warranty. The warranty period varies by vehicle age and mileage, but we ensure you\'re protected.'
    },
    {
      question: 'Can I trade in my current vehicle?',
      answer: 'Absolutely! We offer competitive trade-in values. Bring your current vehicle for a free evaluation, and we\'ll apply its value toward your new purchase.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, certified checks, and offer flexible financing options including our popular 40% down payment plan.'
    },
    {
      question: 'How long does the buying process take?',
      answer: 'With all documents ready, you can complete the purchase in as little as 24-48 hours. Financing approval typically takes 1-3 business days.'
    }
  ],
  stats: [
    { label: 'Vehicles Sold', value: '2,500+' },
    { label: 'Happy Customers', value: '2,200+' },
    { label: 'Available Cars', value: '150+' },
    { label: 'Customer Satisfaction', value: '98%' }
  ],
  ctaPrimary: {
    text: 'Browse Cars',
    link: '/products'
  },
  ctaSecondary: {
    text: 'Contact Sales Team',
    link: '/contact'
  },
  relatedServices: ['car-loan-financing', 'trade-in'],
  metaTitle: 'Premium Car Sales - New & Used Vehicles | Excellent J & C Autos',
  metaDescription: 'Buy quality new and certified pre-owned cars in Nigeria. Transparent pricing, comprehensive inspections, and flexible payment options. Visit our showroom today!',
  keywords: ['car sales Nigeria', 'buy cars Lagos', 'new cars', 'used cars', 'certified pre-owned', 'car dealership']
},

// ============================================
// SERVICE 2: INTERNATIONAL CAR IMPORTATION
// ============================================

 {
  id: 'international-importation',
  slug: 'international-importation',
  title: 'International Car Importation',
  shortTitle: 'Car Importation',
  formType: 'import-quote',
  tagline: 'Direct Import from Global Markets',
  description: 'Direct importation of vehicles from major automotive markets worldwide.',
  longDescription: `Expand your options beyond local inventory with our international car importation service. We specialize in sourcing and importing vehicles from the world's largest automotive markets including the USA, Canada, UAE, South Korea, and China.

Our experienced team handles every aspect of the importation process - from vehicle selection and purchase to shipping, customs clearance, and final delivery to your doorstep. We work with trusted partners in each country to ensure you get authentic, quality vehicles at competitive prices.

With our transparent process, you'll receive regular updates at every stage. We provide detailed cost breakdowns including vehicle price, shipping, customs duties, and our service fee - no hidden charges, ever.`,
  icon: '🌍',
  iconBg: 'from-blue-500 to-blue-600',
  iconColor: 'text-white',
  isPopular: true,
  images: [
    'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1200',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200'
  ],
  features: [
    {
      icon: '🇺🇸',
      title: 'USA Imports',
      description: 'Access to major US auctions and dealerships'
    },
    {
      icon: '🇨🇦',
      title: 'Canada Imports',
      description: 'Quality Canadian vehicles with full documentation'
    },
    {
      icon: '🇦🇪',
      title: 'UAE Imports',
      description: 'Luxury vehicles from Dubai and Abu Dhabi'
    },
    {
      icon: '🇰🇷',
      title: 'South Korea',
      description: 'Direct from Korean manufacturers'
    },
    {
      icon: '🇨🇳',
      title: 'China Imports',
      description: 'Cost-effective Chinese brands'
    },
    {
      icon: '📦',
      title: 'Full Service',
      description: 'We handle shipping, customs, and delivery'
    }
  ],
  benefits: [
    {
      title: 'Wider Selection',
      description: 'Access to millions of vehicles not available locally'
    },
    {
      title: 'Better Prices',
      description: 'Often cheaper than buying similar models locally'
    },
    {
      title: 'Specific Models',
      description: 'Get exact specifications and features you want'
    },
    {
      title: 'Transparent Process',
      description: 'Track your vehicle from purchase to delivery'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Vehicle Selection',
      description: 'Tell us your requirements - make, model, year, features, and budget'
    },
    {
      step: 2,
      title: 'Sourcing & Quotation',
      description: 'We find suitable vehicles and provide detailed cost breakdown'
    },
    {
      step: 3,
      title: 'Purchase & Payment',
      description: 'Upon approval, we purchase the vehicle on your behalf'
    },
    {
      step: 4,
      title: 'Shipping & Tracking',
      description: 'Vehicle is shipped and you receive real-time tracking updates'
    },
    {
      step: 5,
      title: 'Customs Clearance',
      description: 'We handle all customs documentation and duties'
    },
    {
      step: 6,
      title: 'Final Delivery',
      description: 'Vehicle delivered to your preferred location in Nigeria'
    }
  ],
  faqs: [
    {
      question: 'How long does the importation process take?',
      answer: 'Typically 4-8 weeks from purchase to delivery in Nigeria. This includes shipping time (3-6 weeks) and customs clearance (1-2 weeks). Timeline varies by origin country and shipping method.'
    },
    {
      question: 'What are the total costs involved?',
      answer: 'Total cost includes: Vehicle purchase price, shipping fees, insurance, customs duties (35% of CIF value for Nigeria), port charges, and our service fee. We provide detailed breakdown before you commit.'
    },
    {
      question: 'Can I choose the specific vehicle?',
      answer: 'Yes! You can select from available inventory, request specific VIN numbers, or set exact specifications. We\'ll provide photos, videos, and inspection reports before purchase.'
    },
    {
      question: 'What if the vehicle arrives damaged?',
      answer: 'All shipments are fully insured. Any transit damage is covered by insurance. We also conduct pre-shipment and post-arrival inspections to ensure quality.'
    },
    {
      question: 'Which country offers the best value?',
      answer: 'It depends on the vehicle type. USA often has best prices for American brands, UAE for luxury cars, South Korea for Korean brands, and China for affordable compact cars.'
    }
  ],
  pricing: [
    {
      name: 'USA Import',
      description: 'From American auctions and dealerships',
      features: [
        'Vehicle sourcing from major auctions',
        'Pre-purchase inspection available',
        'Shipping to Lagos port',
        'Customs clearance included',
        'Delivery to your location'
      ]
    },
    {
      name: 'UAE Import',
      description: 'Premium vehicles from Dubai/Abu Dhabi',
      features: [
        'Access to luxury dealerships',
        'GCC spec verification',
        'RoRo or container shipping',
        'Full documentation support',
        'White-glove delivery service'
      ],
      highlighted: true
    },
    {
      name: 'Asian Import',
      description: 'From South Korea and China',
      features: [
        'Factory-direct purchases available',
        'Competitive pricing',
        'Quality assurance',
        'Efficient shipping routes',
        'Complete import service'
      ]
    }
  ],
  ctaPrimary: {
    text: 'Request Import Quote',
    link: '/forms/import-quote'
  },
  ctaSecondary: {
    text: 'View Import Process',
    link: '/services'
  },
  relatedServices: ['car-sales', 'pre-order'],
  metaTitle: 'International Car Importation Services | USA, UAE, Canada | Excellent J & C Autos',
  metaDescription: 'Import cars directly from USA, Canada, UAE, South Korea, and China. We handle shipping, customs, and delivery. Get global vehicles at competitive prices.',
  keywords: ['car importation Nigeria', 'import cars from USA', 'UAE car import', 'Canada car import', 'international car shipping']
},

// ============================================
// SERVICE 3: CAR PRE-ORDER SERVICE
// ============================================

{
  id: 'pre-order',
  slug: 'pre-order',
  title: 'Car Pre-Order Service',
  formType: 'pre-order',
  shortTitle: 'Pre-Order',
  tagline: 'Secure Your Dream Car',
  description: 'Request and secure specific vehicles not currently in our inventory.',
  longDescription: `Can't find exactly what you're looking for in our current inventory? No problem! Our pre-order service allows you to secure any vehicle, even if we don't have it in stock yet.

With just 5% down payment, you can reserve your dream car while we source it for you. Whether it's a specific color, trim level, or rare model, we'll find it and deliver it to you. Our extensive network of suppliers across multiple countries ensures we can locate virtually any vehicle.

You'll receive regular updates throughout the sourcing process, from initial search to final delivery. Our pre-order service gives you peace of mind knowing your desired vehicle is secured at a locked-in price, protecting you from market fluctuations.`,
  icon: '⏰',
  iconBg: 'from-purple-500 to-purple-600',
  iconColor: 'text-white',
  badge: 'Only 5% Down',
  isPopular: true,
  images: [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200'
  ],
  features: [
    {
      icon: '💰',
      title: 'Just 5% Down Payment',
      description: 'Reserve your vehicle with minimal upfront cost'
    },
    {
      icon: '🎯',
      title: 'Exact Specifications',
      description: 'Get precisely the make, model, color, and features you want'
    },
    {
      icon: '📱',
      title: 'Regular Updates',
      description: 'Stay informed with progress reports throughout the process'
    },
    {
      icon: '🔒',
      title: 'Price Lock',
      description: 'Your price is guaranteed once the order is confirmed'
    }
  ],
  benefits: [
    {
      title: 'No Compromise',
      description: 'Get exactly what you want instead of settling for what\'s available'
    },
    {
      title: 'Low Initial Investment',
      description: 'Only 5% down payment required to start the process'
    },
    {
      title: 'Guaranteed Availability',
      description: 'We commit to finding and delivering your requested vehicle'
    },
    {
      title: 'Flexible Timeline',
      description: 'Choose delivery timing that works for your schedule'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Submit Request',
      description: 'Tell us exactly what vehicle you want - make, model, year, color, features'
    },
    {
      step: 2,
      title: 'Quote & Timeline',
      description: 'Receive detailed quote and estimated delivery timeline (typically 6-12 weeks)'
    },
    {
      step: 3,
      title: '5% Deposit',
      description: 'Pay just 5% to secure your order and lock in the price'
    },
    {
      step: 4,
      title: 'Sourcing Process',
      description: 'We locate your vehicle through our global network of suppliers'
    },
    {
      step: 5,
      title: 'Regular Updates',
      description: 'Receive weekly updates on sourcing and shipping progress'
    },
    {
      step: 6,
      title: 'Final Payment & Delivery',
      description: 'Complete payment and take delivery of your custom-ordered vehicle'
    }
  ],
  faqs: [
    {
      question: 'What vehicles can I pre-order?',
      answer: 'Almost any vehicle! From current model year cars to specific vintage models. If it exists and can be legally imported to Nigeria, we can source it for you.'
    },
    {
      question: 'How long does pre-order take?',
      answer: 'Typically 6-12 weeks, depending on vehicle availability and origin country. Rare or vintage vehicles may take longer. We provide realistic timelines upfront.'
    },
    {
      question: 'Is the 5% deposit refundable?',
      answer: 'The deposit is refundable if we cannot source your requested vehicle. If you cancel after we\'ve located and purchased the vehicle, the deposit is non-refundable but can be applied to another vehicle.'
    },
    {
      question: 'Can I change specifications after ordering?',
      answer: 'Minor changes are possible before we purchase the vehicle. Once purchased, specifications cannot be changed, but you can cancel (subject to cancellation terms) or transfer the order.'
    },
    {
      question: 'What if the final price changes?',
      answer: 'Your price is locked once you confirm the quote and pay the deposit. We absorb any price increases. If costs decrease, you benefit from the lower price.'
    }
  ],
  stats: [
    { label: 'Pre-Orders Fulfilled', value: '450+' },
    { label: 'Average Delivery Time', value: '8 weeks' },
    { label: 'Success Rate', value: '99.5%' },
    { label: 'Customer Satisfaction', value: '97%' }
  ],
  ctaPrimary: {
    text: 'Start Pre-Order',
    link: '/forms/pre-order'
  },
  ctaSecondary: {
    text: 'View Pre-Order FAQs',
    link: '/services'
  },
  relatedServices: ['international-importation', 'car-sales'],
  metaTitle: 'Car Pre-Order Service - Only 5% Down Payment | Excellent J & C Autos',
  metaDescription: 'Pre-order any car with just 5% down payment. Get exactly the vehicle you want with guaranteed delivery. Custom sourcing from global markets.',
  keywords: ['car pre-order Nigeria', 'custom car order', 'reserve car 5% down', 'special order vehicle']
},

// ============================================
// SERVICE 4: CAR LOAN / FLEXIBLE PAYMENT
// ============================================

 {
  id: 'car-loan-financing',
  slug: 'car-loan-financing',
  title: 'Car Loan / Flexible Payment Plans',
  shortTitle: 'Flexible Financing',
  formType: 'car-loan',
  tagline: 'Drive Now, Pay Later',
  description: 'Affordable financing options to help you own your dream car today.',
  longDescription: `Don't let upfront costs stop you from owning your dream car. Our flexible financing solutions make car ownership accessible and affordable for everyone. With options starting from just 40% down payment, you can drive home in your perfect vehicle today.

We've partnered with leading financial institutions to offer competitive interest rates and flexible repayment terms. Whether you prefer 12, 24, or 36-month plans, we'll customize a package that fits your budget comfortably.

Our streamlined approval process means you can get pre-qualified in minutes. We work with various income levels and credit profiles, focusing on your ability to repay rather than just credit scores. Experience the freedom of car ownership without the financial stress.`,
  icon: '💳',
  iconBg: 'from-green-500 to-green-600',
  iconColor: 'text-white',
  badge: '40% Down Payment',
  isPopular: true,
  images: [
    'https://images.unsplash.com/photo-1554224311-beee460ae6c7?w=1200',
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200'
  ],
  features: [
    {
      icon: '💰',
      title: '40% Down Payment',
      description: 'Start with just 40% and spread the balance over time'
    },
    {
      icon: '📅',
      title: 'Flexible Terms',
      description: 'Choose from 12, 24, or 36-month repayment plans'
    },
    {
      icon: '⚡',
      title: 'Quick Approval',
      description: 'Get pre-approved in as little as 30 minutes'
    },
    {
      icon: '🎯',
      title: 'Competitive Rates',
      description: 'Access to best interest rates in the market'
    }
  ],
  benefits: [
    {
      title: 'Immediate Ownership',
      description: 'Drive your car home today while paying over time'
    },
    {
      title: 'Budget-Friendly',
      description: 'Manageable monthly payments that fit your income'
    },
    {
      title: 'Build Credit',
      description: 'Timely payments help improve your credit profile'
    },
    {
      title: 'No Penalties',
      description: 'Pay off early without penalties or extra charges'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Choose Your Vehicle',
      description: 'Select your desired car from our inventory or pre-order'
    },
    {
      step: 2,
      title: 'Get Pre-Qualified',
      description: 'Fill out simple application - approval in 30 minutes to 24 hours'
    },
    {
      step: 3,
      title: 'Select Payment Plan',
      description: 'Choose down payment amount and repayment period'
    },
    {
      step: 4,
      title: 'Submit Documents',
      description: 'Provide ID, proof of income, and residence verification'
    },
    {
      step: 5,
      title: 'Pay Down Payment',
      description: 'Make your 40% (or higher) down payment'
    },
    {
      step: 6,
      title: 'Drive Home',
      description: 'Take delivery and start your monthly payment schedule'
    }
  ],
  faqs: [
    {
      question: 'What are the interest rates?',
      answer: 'Rates vary from 8-15% per annum depending on down payment amount, loan term, and credit profile. Larger down payments and shorter terms qualify for lower rates.'
    },
    {
      question: 'What documents do I need?',
      answer: 'Valid ID (National ID, Driver\'s License, or Int\'l Passport), proof of income (bank statements, salary slips), utility bill for address verification, and 2 guarantors with verifiable income.'
    },
    {
      question: 'Can I pay off early?',
      answer: 'Yes! You can pay off your loan anytime without penalties. Early payment actually saves you interest charges.'
    },
    {
      question: 'What if I miss a payment?',
      answer: 'We offer a 7-day grace period. After that, late fees apply. Contact us immediately if you anticipate payment difficulties - we can work out solutions.'
    },
    {
      question: 'Do you accept self-employed applicants?',
      answer: 'Absolutely! We work with salaried employees, business owners, and self-employed individuals. Bank statements showing consistent income are acceptable proof.'
    }
  ],
  pricing: [
    {
      name: 'Standard Plan',
      description: '40% down, 24 months',
      features: [
        '40% down payment',
        '24-month repayment',
        'Competitive interest rates',
        'No hidden fees',
        'Early payoff allowed'
      ]
    },
    {
      name: 'Premium Plan',
      description: '50% down, 18 months',
      features: [
        '50% down payment',
        '18-month repayment',
        'Lower interest rates',
        'Priority approval',
        'Flexible payment dates',
        'Free insurance for 6 months'
      ],
      highlighted: true
    },
    {
      name: 'Executive Plan',
      description: '60% down, 12 months',
      features: [
        '60% down payment',
        '12-month repayment',
        'Lowest interest rates',
        'Instant approval',
        'Free comprehensive insurance',
        'Free first service'
      ]
    }
  ],
  stats: [
    { label: 'Loans Approved', value: '1,200+' },
    { label: 'Average Approval Time', value: '2 hours' },
    { label: 'Approval Rate', value: '87%' },
    { label: 'Satisfied Customers', value: '95%' }
  ],
  ctaPrimary: {
    text: 'Apply for Financing',
    link: '/forms/car-loan'
  },
  ctaSecondary: {
    text: 'Calculate Monthly Payment',
    link: '/products'
  },
  relatedServices: ['car-sales', 'pre-order'],
  metaTitle: 'Car Financing & Loans - 40% Down Payment | Excellent J & C Autos',
  metaDescription: 'Flexible car financing with 40% down payment. Quick approval, competitive rates, and terms up to 36 months. Drive your dream car today!',
  keywords: ['car loan Nigeria', 'car financing Lagos', 'flexible payment', '40% down payment', 'auto loan']
},

// ============================================
// SERVICE 5: CAR SWAP / TRADE-IN
// ============================================

{
  id: 'trade-in',
  slug: 'trade-in',
  title: 'Car Swap / Trade-In Service',
  formType: 'trade-in',
  shortTitle: 'Trade-In',
  tagline: 'Upgrade Your Vehicle Easily',
  description: 'Exchange or upgrade your current vehicle with ease and get fair value.',
  longDescription: `Ready to upgrade? Our car swap and trade-in service makes it easy to transition to a newer, better vehicle. We offer competitive valuations based on current market rates, vehicle condition, and demand.

The process is straightforward: bring your current vehicle for a free evaluation, receive an instant quote, and apply that value toward your new purchase. No need to worry about selling privately, dealing with buyers, or advertising costs.

We accept vehicles of all makes, models, and conditions. Even if your car has minor issues, we'll still make an offer. Our transparent evaluation process ensures you get fair market value, and our trade-in experts explain exactly how we arrived at the valuation.`,
  icon: '🔄',
  iconBg: 'from-orange-500 to-orange-600',
  iconColor: 'text-white',
  isPopular: false,
  images: [
    'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200',
    'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200'
  ],
  features: [
    {
      icon: '⚡',
      title: 'Instant Valuation',
      description: 'Get your vehicle valued in 30 minutes or less'
    },
    {
      icon: '💯',
      title: 'Fair Market Price',
      description: 'Competitive offers based on current market rates'
    },
    {
      icon: '🚀',
      title: 'Quick Process',
      description: 'Complete the swap in the same day'
    },
    {
      icon: '📋',
      title: 'All Conditions',
      description: 'We accept vehicles in any condition'
    }
  ],
  benefits: [
    {
      title: 'No Hassle',
      description: 'Skip the stress of private selling - we handle everything'
    },
    {
      title: 'Immediate Value',
      description: 'Apply trade-in value instantly to your new purchase'
    },
    {
      title: 'Transparent Process',
      description: 'Clear explanation of how we calculate your vehicle\'s value'
    },
    {
      title: 'Tax Benefits',
      description: 'Potential tax advantages compared to private sales'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Provide basic info about your vehicle online or visit our location'
    },
    {
      step: 2,
      title: 'Physical Inspection',
      description: 'Our experts thoroughly inspect your vehicle (30-45 minutes)'
    },
    {
      step: 3,
      title: 'Instant Valuation',
      description: 'Receive immediate quote with detailed breakdown'
    },
    {
      step: 4,
      title: 'Choose New Vehicle',
      description: 'Browse our inventory and select your upgrade'
    },
    {
      step: 5,
      title: 'Complete Transaction',
      description: 'Trade-in value applied to new purchase - drive home same day'
    }
  ],
  faqs: [
    {
      question: 'How do you determine my car\'s value?',
      answer: 'We consider: current market demand, vehicle age and mileage, overall condition, service history, accident history, and current selling prices for similar vehicles. Our valuation is competitive with market rates.'
    },
    {
      question: 'Do I need to settle outstanding loans?',
      answer: 'Yes, any outstanding loan must be cleared before trade-in. We can help facilitate the payoff process and apply remaining value (if any) to your new purchase.'
    },
    {
      question: 'Can I trade in a car with issues?',
      answer: 'Yes! We accept vehicles with mechanical issues, body damage, or high mileage. The condition affects valuation but doesn\'t disqualify your car from trade-in.'
    },
    {
      question: 'Is the valuation negotiable?',
      answer: 'Our initial offer is based on fair market value. However, if you have documentation of recent major repairs or upgrades, we can reconsider the valuation.'
    },
    {
      question: 'Can I just sell without buying?',
      answer: 'While we prefer trade-ins, we do buy vehicles outright on a case-by-case basis, especially high-demand models. Contact us to discuss outright purchase options.'
    }
  ],
  stats: [
    { label: 'Vehicles Traded', value: '850+' },
    { label: 'Average Valuation Time', value: '35 mins' },
    { label: 'Customer Satisfaction', value: '92%' },
    { label: 'Same-Day Completions', value: '78%' }
  ],
  ctaPrimary: {
    text: 'Get Trade-In Value',
    link: '/trade-in/valuation'
  },
  ctaSecondary: {
    text: 'Book Inspection',
    link: '/contact?service=trade-in'
  },
  relatedServices: ['car-sales', 'car-loan-financing'],
  metaTitle: 'Car Trade-In & Swap Service - Instant Valuation | Excellent J & C Autos',
  metaDescription: 'Trade in your car for instant value toward a new vehicle. Fair market prices, quick evaluation, hassle-free process. Get your trade-in quote today!',
  keywords: ['car trade-in Nigeria', 'swap car Lagos', 'trade in value', 'sell car upgrade', 'car exchange']
},

// ============================================
// SERVICE 6: PARTS & ENGINEERING SERVICES
// ============================================
 {
  id: 'parts-engineering',
  slug: 'parts-engineering',
  title: 'Parts & Engineering Services',
  formType: 'part-quote',
  shortTitle: 'Parts & Engineering',
  tagline: 'Expert Technical Support',
  description: 'Professional auto parts supply and technical engineering support.',
  longDescription: `Excellence in auto parts and engineering is at the heart of our business. With over a decade of experience, our Parts & Engineering division provides genuine OEM parts, expert technical support, and professional installation services for all vehicle makes and models.

We maintain extensive inventory of parts for popular brands and can source rare components through our global network. Our certified technicians use state-of-the-art diagnostic equipment to identify issues accurately and recommend the right solutions.

Whether you need routine maintenance parts, performance upgrades, or complex repairs, our team delivers quality service with a commitment to excellence. All parts come with manufacturer warranties, and our installations are backed by our workmanship guarantee.`,
  icon: '🔧',
  iconBg: 'from-gray-700 to-gray-800',
  iconColor: 'text-white',
  badge: 'Core Service',
  isPopular: false,
  images: [
    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200',
    'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200'
  ],
  features: [
    {
      icon: '✓',
      title: 'Genuine OEM Parts',
      description: 'Authentic manufacturer parts with full warranties'
    },
    {
      icon: '✓',
      title: 'Expert Technicians',
      description: 'ASE-certified mechanics with years of experience'
    },
    {
      icon: '✓',
      title: 'Full Installation',
      description: 'Professional installation with workmanship guarantee'
    },
    {
      icon: '✓',
      title: 'Diagnostic Services',
      description: 'Advanced computer diagnostics for all vehicle systems'
    }
  ],
  benefits: [
    {
      title: 'Quality Assurance',
      description: 'Only genuine OEM and premium aftermarket parts'
    },
    {
      title: 'Expert Knowledge',
      description: 'Technical expertise across all vehicle makes and models'
    },
    {
      title: 'Warranty Protection',
      description: 'Parts and labor warranties for peace of mind'
    },
    {
      title: 'Comprehensive Service',
      description: 'From diagnosis to installation - complete solution'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Diagnostic Assessment',
      description: 'Bring your vehicle or share your parts requirements'
    },
    {
      step: 2,
      title: 'Parts Sourcing',
      description: 'We identify exact parts needed and check availability'
    },
    {
      step: 3,
      title: 'Quote & Approval',
      description: 'Receive detailed quote for parts and labor (if applicable)'
    },
    {
      step: 4,
      title: 'Installation',
      description: 'Professional installation by certified technicians'
    },
    {
      step: 5,
      title: 'Quality Check',
      description: 'Post-installation testing and quality verification'
    },
    {
      step: 6,
      title: 'Delivery/Pickup',
      description: 'Collect your vehicle or receive parts delivery'
    }
  ],
  faqs: [
    {
      question: 'Do you sell parts only or include installation?',
      answer: 'Both! You can purchase parts for self-installation or use our professional installation service. We recommend installation for complex components.'
    },
    {
      question: 'Are the parts genuine or aftermarket?',
      answer: 'We stock both genuine OEM parts and premium aftermarket brands. We clearly specify the type and warranty coverage for each option.'
    },
    {
      question: 'What\'s your warranty on parts and labor?',
      answer: 'OEM parts come with manufacturer warranty (typically 12-24 months). Our labor has a 90-day workmanship warranty. Extended warranties available for purchase.'
    },
    {
      question: 'Can you source rare or vintage parts?',
      answer: 'Yes! Through our global supplier network, we can source hard-to-find parts for vintage and rare vehicles. Delivery time varies (1-6 weeks typically).'
    },
    {
      question: 'Do you offer mobile service?',
      answer: 'We offer mobile diagnostic service for Lagos and surrounding areas. Some repairs can be done on-site, while others require workshop facilities.'
    }
  ],
  pricing: [
    {
      name: 'Parts Only',
      description: 'Purchase parts for self-installation',
      features: [
        'Genuine OEM or premium aftermarket',
        'Manufacturer warranty included',
        'Expert advice on installation',
        'Delivery available',
        'Return policy (unused parts)'
      ]
    },
    {
      name: 'Parts + Installation',
      description: 'Complete service package',
      features: [
        'All parts included',
        'Professional installation',
        'Labor warranty (90 days)',
        'Post-installation testing',
        'Free pickup & delivery (Lagos)'
      ],
      highlighted: true
    },
    {
      name: 'Diagnostic Service',
      description: 'Computer diagnostics',
      price: {
        ngn: 15000,
        usd: 18
      },
      features: [
        'Full computer scan',
        'Error code analysis',
        'Detailed report',
        'Repair recommendations',
        'Credited if repair done with us'
      ]
    }
  ],
  stats: [
    { label: 'Parts in Stock', value: '10,000+' },
    { label: 'Vehicles Serviced', value: '5,000+' },
    { label: 'Brands Supported', value: '50+' },
    { label: 'Customer Rating', value: '4.8/5' }
  ],
  ctaPrimary: {
    text: 'Request Parts Quote',
    link: '/forms/part-quote'
  },
  ctaSecondary: {
    text: 'Book Service',
    link: '/contact?service=parts'
  },
  relatedServices: ['car-sales'],
  metaTitle: 'Auto Parts & Engineering Services - OEM Parts | Excellent J & C Autos',
  metaDescription: 'Genuine OEM auto parts and expert engineering services. Professional installation, diagnostics, and technical support for all vehicle makes.',
  keywords: ['auto parts Nigeria', 'car parts Lagos', 'OEM parts', 'car repair', 'vehicle maintenance', 'engineering services']
}

]

// ============================================
// EXPORT ALL SERVICES
// ============================================


// Helper function to get service by ID
export function getServiceById(id: string): ServiceDetail | undefined {
  return ALL_SERVICES.find(service => service.id === id);
}

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return ALL_SERVICES.find(service => service.slug === slug);
}

// Helper function to get related services
export function getRelatedServices(serviceId: string): ServiceDetail[] {
  const service = getServiceById(serviceId);
  if (!service) return [];
  
  return service.relatedServices
    .map(id => getServiceById(id))
    .filter((s): s is ServiceDetail => s !== undefined);
}

// Helper function to get popular services
export function getPopularServices(): ServiceDetail[] {
  return ALL_SERVICES.filter(service => service.isPopular);
}
