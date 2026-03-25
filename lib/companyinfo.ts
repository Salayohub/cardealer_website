// ============================================
// COMPANY DATA
// ============================================

import { Award, CheckCircle, Clock, Globe, Heart, Shield, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { Car, Headphones, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export const COMPANY_INFO = {
  name: 'SwiftRide S & B Autos',
  fullName: 'SwiftRide S & B Autos Parts & Engineering Ltd',
  tagline: "Nigeria's Most Trusted Automotive Partner",
  founded: 2012,
  location: 'Lagos, Nigeria',
  description: `We are Nigeria's premier automotive dealership, specializing in quality vehicles, international importation, and comprehensive automotive services. With over a decade of excellence, we've built our reputation on trust, quality, and customer satisfaction.`,
  
  mission: `To provide Nigerians with access to quality vehicles and automotive services through transparent practices, innovative financing solutions, and unwavering commitment to customer satisfaction.`,
  
  vision: `To become West Africa's leading automotive brand, recognized for excellence in service delivery, customer care, and contribution to the automotive industry's growth.`,
  
  contact: {
    phone: '+234 123 456 7890',
    whatsapp: '+234 123 456 7890',
    email: 'info@swiftride.com',
    address: '123 Automotive Drive, Victoria Island, Lagos, Nigeria'
  },
  
  social: {
    facebook: 'https://facebook.com/swiftrideautos',
    instagram: 'https://instagram.com/swiftrideautos',
    twitter: 'https://twitter.com/swiftrideautos',
    youtube: 'https://youtube.com/@swiftrideautos',
    linkedin: 'https://linkedin.com/company/swiftrideautos'
  }
};

export const CORE_VALUES = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with honesty and transparency, building trust through every interaction.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for the highest standards in every vehicle we sell and every service we provide.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Our customers are at the heart of everything we do. Their satisfaction is our success.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We embrace new technologies and methods to provide better solutions for our customers.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'We believe in the power of collaboration, working together to achieve extraordinary results.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We are committed to continuous improvement and sustainable business practices.',
    color: 'from-orange-500 to-orange-600'
  }
];

export const MILESTONES = [
  {
    year: 2012,
    title: 'Company Founded',
    description: 'SwiftRide S & B Autos was established in Lagos with a vision to revolutionize car buying in Nigeria.'
  },
  {
    year: 2014,
    title: '500 Cars Sold',
    description: 'Reached our first major milestone, selling 500 quality vehicles to satisfied customers.'
  },
  {
    year: 2016,
    title: 'International Importation',
    description: 'Launched our international car importation service, connecting Nigeria to global markets.'
  },
  {
    year: 2018,
    title: 'Parts & Engineering Division',
    description: 'Expanded services to include comprehensive auto parts supply and engineering support.'
  },
  {
    year: 2020,
    title: '1,000+ Happy Customers',
    description: 'Celebrated serving over 1,000 satisfied customers across Nigeria.'
  },
  {
    year: 2022,
    title: 'Digital Innovation',
    description: 'Launched online platform with virtual showroom and digital financing solutions.'
  },
  {
    year: 2024,
    title: '2,500+ Vehicles Sold',
    description: 'Achieved new record, solidifying our position as Nigeria\'s trusted automotive partner.'
  }
];

export const STATS = [
  { label: 'Years in Business', value: '12+', icon: Clock },
  { label: 'Vehicles Sold', value: '2,500+', icon: TrendingUp },
  { label: 'Happy Customers', value: '2,200+', icon: Users },
  { label: 'Customer Satisfaction', value: '98%', icon: Star },
  { label: 'Available Inventory', value: '150+', icon: Globe },
  { label: 'Service Partners', value: '50+', icon: Award }
];

export const WHY_CHOOSE_US = [
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Every vehicle undergoes rigorous 150-point inspection'
  },
  {
    icon: Shield,
    title: 'Transparent Pricing',
    description: 'No hidden fees - clear, upfront pricing on all vehicles'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your satisfaction'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Over 12 years of excellence and 2,500+ satisfied customers'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access to vehicles from USA, Canada, UAE, and more'
  },
  {
    icon: Zap,
    title: 'Flexible Financing',
    description: 'Affordable payment plans from 40% down payment'
  }
];




// CONTACT DATA
// ============================================

export const CONTACT_INFO = {
  phone: {
    primary: '+234 123 456 7890',
    secondary: '+234 098 765 4321'
  },
  whatsapp: '+234 123 456 7890',
  email: {
    general: 'info@swiftride.com',
    sales: 'sales@swiftride.com',
    support: 'support@swiftride.com'
  },
  address: {
    street: '123 Automotive Drive',
    area: 'Victoria Island',
    city: 'Lagos',
    state: 'Lagos State',
    country: 'Nigeria',
    full: '123 Automotive Drive, Victoria Island, Lagos, Nigeria'
  },
  coordinates: {
    lat: 6.4281,
    lng: 3.4219
  },
  businessHours: {
    weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 5:00 PM',
    sunday: 'Sunday: Closed'
  },
  social: {
    facebook: 'https://facebook.com/swiftrideautos',
    instagram: 'https://instagram.com/swiftrideautos',
    twitter: 'https://twitter.com/swiftrideautos',
    youtube: 'https://youtube.com/@swiftrideautos',
    linkedin: 'https://linkedin.com/company/swiftrideautos'
  }
};

export const CONTACT_METHODS = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team',
    value: CONTACT_INFO.phone.primary,
    link: `tel:${CONTACT_INFO.phone.primary}`,
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick responses on WhatsApp',
    value: CONTACT_INFO.whatsapp,
    link: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`,
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a detailed message',
    value: CONTACT_INFO.email.general,
    link: `mailto:${CONTACT_INFO.email.general}`,
    color: 'from-red-500 to-red-600'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come see our showroom',
    value: CONTACT_INFO.address.full,
    link: `https://maps.google.com/?q=${CONTACT_INFO.coordinates.lat},${CONTACT_INFO.coordinates.lng}`,
    color: 'from-purple-500 to-purple-600'
  }
];

export const FAQS = [
  {
    question: 'What are your business hours?',
    answer: `We're open Monday to Friday from 8:00 AM to 6:00 PM, Saturday from 9:00 AM to 5:00 PM. We're closed on Sundays and public holidays. However, you can reach us via WhatsApp or email anytime, and we'll respond during business hours.`
  },
  {
    question: 'How quickly will I get a response?',
    answer: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly or send a WhatsApp message for faster response.'
  },
  {
    question: 'Can I schedule a test drive?',
    answer: 'Absolutely! You can schedule a test drive by calling us, sending a WhatsApp message, or filling out the contact form above. Please specify which vehicle you\'re interested in and your preferred date and time.'
  },
  {
    question: 'Do you offer virtual consultations?',
    answer: 'Yes! We offer virtual consultations via WhatsApp video call or Zoom. This is perfect if you\'re not in Lagos or prefer to discuss your requirements from the comfort of your home.'
  },
  {
    question: 'What information should I include in my message?',
    answer: 'Please include your name, contact details, the nature of your inquiry (sales, service, financing, etc.), and any specific requirements. The more details you provide, the better we can assist you.'
  }
];

export const DEPARTMENTS = [
  {
    icon: Car,
    title: 'Sales Department',
    email: CONTACT_INFO.email.sales,
    description: 'Vehicle purchases, pre-orders, and inventory inquiries'
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    email: CONTACT_INFO.email.support,
    description: 'After-sales service, parts, and general assistance'
  },
  {
    icon: Award,
    title: 'General Inquiries',
    email: CONTACT_INFO.email.general,
    description: 'All other questions and information requests'
  }
];