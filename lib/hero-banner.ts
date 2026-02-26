import { HeroSlide } from '@/types/interfaces';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    type: 'service',
    title: "Nigeria's #1 Trusted Car Dealer",
    subtitle: 'Premium Quality Vehicles',
    description: 'Find your dream car with flexible payment options. Own your perfect vehicle with just 40% down payment and drive home today.',
    ctaPrimary: {
      text: 'Our Services',
      link: '/services'
    },
    ctaSecondary: {
      text: 'Contact Us',
      link: '/contact'
    },
    backgroundImage: '/assets/hero-car-img/image3.png',
    badge: 'Trusted by 2,500+ Happy Customers'
  },

  {
    id: 2,
    type: 'service',
    title: "Keep Your Car in Peak Condition",
    subtitle: 'Professional Auto Service & Maintenance You Can Trust',
    description: 'We provide expert car servicing, diagnostics, and mechanical repairs handled by qualified engineers. From routine maintenance to major fixes, we ensure your vehicle runs smoothly, safely, and efficiently at all times.',
    ctaPrimary: {
      text: 'Book a sercevice',
      link: '/services'
    },
    ctaSecondary: {
      text: 'Visit Our Workshop',
      link: '/contact'
    },
    backgroundImage: '/assets/hero-car-img/image4.png',
    badge: 'Trusted by 2,500+ Happy Customers'
  },

  {
    id: 3,
    type: 'service',
    title: 'Pre-Order Any Car You Want',
    subtitle: 'Pre-Order Any Car with Just 5% Commitment',
    description: 'Tell us the car you want, your budget, and preferred specifications. With a 5% pre-order commitment, we handle sourcing, inspection, and importation — delivering your exact choice without stress.',
    ctaPrimary: {
      text: 'Start a Pre-Order',
      link: '/services'
    },
    ctaSecondary: {
      text: 'Request a Car',
      link: '/contact'
    },
    backgroundImage: '/assets/hero-car-img/image1.png',
    badge: '40% Down Payment Option'
  },
  {
    id: 4,
    type: 'service',
    title: 'Own a Car Without Full Payment Upfront',
    subtitle: '40% Down Payment • Flexible Balance • Car Swap Available',
    description: 'We offer flexible car loans that allow you to pay just 40% upfront and spread the balance conveniently. You can also swap or upgrade your current car to a better option with ease.',
    ctaPrimary: {
      text: 'Apply for Car Loan',
      link: '/services'
    },
    ctaSecondary: {
      text: 'Swap Your Car',
      link: '/contact'
    },
    backgroundImage: '/assets/hero-car-img/image2.png',
    badge: 'Insured & Secure Transport'
  },
  {
    id: 5,
    type: 'product',
    title: '2 New Arrivals Just Landed',
    subtitle: 'Fresh Imports Ready for Immediate Purchase',
    description: 'Explore our latest arrivals from international markets. These vehicles are available for immediate purchase and inspection — first come, first served. Don’t miss out on premium options at competitive prices.',
    ctaPrimary: {
      text: 'View New Arrivals',
      link: '/cars/mercedes-benz-gle-450-2023'
    },
    ctaSecondary: {
      text: 'Book Inspection',
      link: '/contact'
    },
    backgroundImage: '/assets/hero-car-img/image5.png',
    productImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    badge: 'Only 5% Down Payment'
  }
];