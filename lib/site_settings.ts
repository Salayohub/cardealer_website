import { SiteSettings } from '../types/interfaces';

export const MOCK_SITE_SETTINGS: SiteSettings = {
  companyName: 'SwiftRide S & B Autos',
  tagline: 'Parts & Engineering Ltd',
  email: 'info@swiftrideautos.com',
  phone: '+234 123 456 7890',
  whatsappNumber: '2341234567890',
  address: '123 Auto Plaza, Victoria Island, Lagos, Nigeria',
  socialMedia: {
    facebook: 'https://facebook.com/swiftrideautos',
    instagram: 'https://instagram.com/swiftrideautos',
    twitter: 'https://twitter.com/swiftrideautos',
    youtube: 'https://youtube.com/@swiftrideautos'
  },
  exchangeRate: {
    usdToNgn: 825 // 1 USD = 825 NGN (approximate)
  },
  meta: {
    title: 'SwiftRide S & B Autos - Nigeria\'s #1 Car Dealer',
    description: 'Premium quality cars with flexible payment options. Buy new and used cars in Nigeria with 40% down payment. Trusted car dealer in Lagos.',
    keywords: [
      'car dealer Nigeria',
      'buy cars Lagos',
      'used cars Nigeria',
      'car financing',
      'Toyota Nigeria',
      'Lexus Nigeria',
      'Mercedes-Benz Nigeria',
      'BMW Nigeria',
      'luxury cars Nigeria'
    ]
  }
};