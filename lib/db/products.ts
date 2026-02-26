import { Cars } from '@/types/interfaces';

export const products: Cars[] = [
  
  {
    id: '1',
    title: '2023 Toyota Camry XSE',
    slug: 'toyota-camry-2023',
    name: '2023 Toyota Camry XSE',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    badge: 'New Arrival',
    price: {
      ngn: 35000000,
      usd: 42500
    },
    images: [
      '/assets/productimg/toyotal1.png',
      '/assets/productimg/toyotal2.png',
      '/assets/productimg/toyotal3.png'
    ],
    thumbnail: '/assets/productimg/toyotal1.png',
    status: 'available',
    category: 'sedan',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'Brand new 2023 Toyota Camry XSE with premium features. This elegant sedan combines reliability with modern technology and comfort.',
    features: [
      'Apple CarPlay & Android Auto',
      'Adaptive Cruise Control',
      'Lane Departure Warning',
      'Leather Interior',
      'Sunroof',
      'Premium Sound System',
      'Rear Camera',
      '18-inch Alloy Wheels'
    ],
    specifications: {
      engine: '2.5L 4-Cylinder',
      horsepower: '203 HP',
      seats: 5,
      doors: 4,
      color: 'Pearl White',
      interiorColor: 'Black Leather',
      // vin: 'CAMRY2023XSE001'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: true,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: '2024 Lexus RX 350 F Sport',
    slug: 'lexus-rx-350-2024',
    name: '2024 Lexus RX 350 F Sport',
    make: 'Lexus',
    model: 'RX 350',
    year: 2024,
    price: {
      ngn: 68000000,
      usd: 82500
    },
    images: [
      '/assets/productimg/lexus1.png',
      '/assets/productimg/lexus2.png'
    ],
    thumbnail: '/assets/productimg/lexus2.png',
    status: 'available',
    category: 'luxury',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'Experience luxury and performance with the 2024 Lexus RX 350 F Sport. Premium craftsmanship meets cutting-edge technology.',
    features: [
      'Mark Levinson Premium Audio',
      'Panoramic Sunroof',
      'Heads-Up Display',
      'Ventilated Seats',
      '360-Degree Camera',
      'Adaptive Suspension',
      'Wireless Charging',
      'Power Tailgate'
    ],
    specifications: {
      engine: '3.5L V6',
      horsepower: '295 HP',
      seats: 5,
      doors: 4,
      color: 'Atomic Silver',
      interiorColor: 'Red Leather',
      // vin: 'LEXRX2024FSP001'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: true,
    createdAt: '2025-01-10T10:00:00Z',
    updatedAt: '2025-01-10T10:00:00Z'
  },
  {
    id: '3',
    title: '2022 Honda Accord Sport',
    slug: 'honda-accord-2022',
    name: '2022 Honda Accord Sport',
    make: 'Honda',
    model: 'Accord',
    year: 2022,
    price: {
      ngn: 28500000,
      usd: 34600
    },
    images: [
      '/assets/productimg/honda1.png'
    ],
    thumbnail: '/assets/productimg/honda1.png',
    status: 'available',
    category: 'sedan',
    condition: 'used',
    mileage: 15000,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'Well-maintained 2022 Honda Accord Sport with low mileage. Perfect balance of performance and efficiency.',
    features: [
      'Honda Sensing Safety Suite',
      'Apple CarPlay',
      'Dual-Zone Climate Control',
      'Sport Seats',
      'LED Headlights',
      'Backup Camera',
      '19-inch Alloy Wheels'
    ],
    specifications: {
      engine: '1.5L Turbo',
      horsepower: '192 HP',
      seats: 5,
      doors: 4,
      color: 'Radiant Red',
      interiorColor: 'Black Cloth'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: false,
    createdAt: '2025-01-12T10:00:00Z',
    updatedAt: '2025-01-12T10:00:00Z'
  },
  {
    id: '4',
    title: '2023 Mercedes-Benz GLE 450 4MATIC',
    slug: 'mercedes-benz-gle-450-2023',
    name: '2023 Mercedes-Benz GLE 450 4MATIC',
    make: 'Mercedes-Benz',
    model: 'GLE 450',
    badge: 'fast selling',
    year: 2023,
    price: {
      ngn: 95000000,
      usd: 115000
    },
    images: [
      '/assets/productimg/benze1.png',
      // '/assets/productimg/benze1.png'
    ],
    thumbnail: '/assets/productimg/benze1.png',
    status: 'pre-order',
    category: 'luxury',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'Ultimate luxury SUV - Mercedes-Benz GLE 450 with cutting-edge technology and unmatched comfort. Pre-order now!',
    features: [
      'MBUX Infotainment',
      'Burmester Surround Sound',
      'Air Suspension',
      'Massage Seats',
      'Night Package',
      'AMG Line',
      'Ambient Lighting',
      'Parking Assist'
    ],
    specifications: {
      engine: '3.0L Inline-6 Turbo',
      horsepower: '362 HP',
      seats: 5,
      doors: 4,
      color: 'Obsidian Black',
      interiorColor: 'Beige Leather'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: true,
    createdAt: '2025-01-08T10:00:00Z',
    updatedAt: '2025-01-08T10:00:00Z'
  },
  {
    id: '5',
    title: '2023 Toyota RAV4 Adventure',
    slug: 'toyota-rav4-2023',
    name: '2023 Toyota RAV4 Adventure',
    make: 'Toyota',
    model: 'RAV4',
    year: 2023,
    price: {
      ngn: 42000000,
      usd: 51000
    },
    images: [
      '/assets/productimg/toyota2.png'
    ],
    thumbnail: '/assets/productimg/toyota2.png',
    status: 'available',
    category: 'suv',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'Rugged and reliable 2023 Toyota RAV4 Adventure. Perfect for Nigerian roads and families.',
    features: [
      'All-Wheel Drive',
      'Toyota Safety Sense',
      'Power Liftgate',
      'Roof Rails',
      'Multi-Terrain Select',
      '8-inch Touchscreen',
      'Dual USB Ports'
    ],
    specifications: {
      engine: '2.5L 4-Cylinder',
      horsepower: '203 HP',
      seats: 5,
      doors: 4,
      color: 'Lunar Rock',
      interiorColor: 'Black Fabric'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: true,
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z'
  },
  {
    id: '6',
    title: '2023 BMW X5 xDrive40i',
    slug: 'bmw-x5-2023',
    name: '2023 BMW X5 xDrive40i',
    make: 'BMW',
    model: 'X5',
    badge: 'Limited Stock',
    year: 2023,
    price: {
      ngn: 85000000,
      usd: 103000
    },
    images: [
      '/assets/productimg/bmw1.png'
    ],
    thumbnail: '/assets/productimg/bmw1.png',
    status: 'available',
    category: 'luxury',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'Sophisticated and powerful BMW X5. German engineering at its finest with premium comfort.',
    features: [
      'iDrive 8 System',
      'Harman Kardon Audio',
      'Panoramic Roof',
      'Gesture Control',
      'Head-Up Display',
      'Parking Assistant Plus',
      'Wireless Apple CarPlay',
      'Adaptive LED Headlights'
    ],
    specifications: {
      engine: '3.0L Inline-6 Turbo',
      horsepower: '335 HP',
      seats: 5,
      doors: 4,
      color: 'Alpine White',
      interiorColor: 'Cognac Leather'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: true,
    createdAt: '2025-01-11T10:00:00Z',
    updatedAt: '2025-01-11T10:00:00Z'
  },
  {
    id: '7',
    title: '2024 Tesla Model 3 Long Range',
    slug: 'tesla-model-3-2024',
    name: '2024 Tesla Model 3 Long Range',
    make: 'Tesla',
    model: 'Model 3',
    year: 2024,
    price: {
      ngn: 52000000,
      usd: 63000
    },
    images: [
      '/assets/productimg/jgua1.png'
    ],
    thumbnail: '/assets/productimg/jgua1.png',
    status: 'pre-order',
    category: 'electric',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'electric',
    description: 'Experience the future with Tesla Model 3. Zero emissions, incredible performance, and cutting-edge technology.',
    features: [
      'Autopilot',
      '15-inch Touchscreen',
      '358 Mile Range',
      'Premium Audio',
      'Glass Roof',
      'Over-the-Air Updates',
      'Supercharger Access',
      'Dog Mode'
    ],
    specifications: {
      engine: 'Dual Motor AWD',
      horsepower: '346 HP',
      seats: 5,
      doors: 4,
      color: 'Midnight Silver',
      interiorColor: 'Black & White Vegan Leather'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: true,
    createdAt: '2025-01-09T10:00:00Z',
    updatedAt: '2025-01-09T10:00:00Z'
  },
  {
    id: '8',
    title: '2023 Ford Explorer Platinum',
    slug: 'ford-explorer-2023',
    name: '2023 Ford Explorer Platinum',
    make: 'Ford',
    model: 'Explorer',
    year: 2023,
    price: {
      ngn: 48000000,
      usd: 58000
    },
    images: [
      '/assets/productimg/toyotal4.png'
    ],
    thumbnail: '/assets/productimg/toyotal4.png',
    status: 'available',
    category: 'suv',
    condition: 'certified-pre-owned',
    mileage: 8500,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'Spacious and powerful Ford Explorer Platinum. Perfect family SUV with 3-row seating.',
    features: [
      '7-Passenger Seating',
      'SYNC 4 Infotainment',
      'Co-Pilot360 Assist',
      'Heated & Cooled Seats',
      'Power-Folding Third Row',
      'Twin Panel Moonroof',
      'B&O Premium Audio'
    ],
    specifications: {
      engine: '3.0L V6 EcoBoost',
      horsepower: '400 HP',
      seats: 7,
      doors: 4,
      color: 'Stone Blue',
      interiorColor: 'Ebony Leather'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: false,
    createdAt: '2025-01-13T10:00:00Z',
    updatedAt: '2025-01-13T10:00:00Z'
  },
  {
    id: '9',
    title: '2023 Nissan Rogue SL',
    slug: 'nissan-rogue-2023',
    name: '2023 Nissan Rogue SL',
    make: 'Nissan',
    model: 'Rogue',
    badge: 'Best choice',
    year: 2023,
    price: {
      ngn: 32000000,
      usd: 38800
    },
    images: [
      '/assets/productimg/honda1.png'
    ],
    thumbnail: '/assets/productimg/honda1.png',
    status: 'available',
    category: 'suv',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'Stylish and fuel-efficient Nissan Rogue. Modern design with advanced safety features.',
    features: [
      'ProPILOT Assist',
      '9-inch Touchscreen',
      'Bose Audio System',
      'Motion-Activated Liftgate',
      'Tri-Zone Climate',
      'Quilted Leather Seats',
      'Around View Monitor'
    ],
    specifications: {
      engine: '1.5L 3-Cylinder Turbo',
      horsepower: '201 HP',
      seats: 5,
      doors: 4,
      color: 'Scarlet Ember',
      interiorColor: 'Charcoal Leather'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: false,
    createdAt: '2025-01-16T10:00:00Z',
    updatedAt: '2025-01-16T10:00:00Z'
  },
  {
    id: '10',
    title: '2023 Range Rover Sport HSE',
    slug: 'range-rover-sport-2023',
    name: '2023 Range Rover Sport HSE',
    make: 'Land Rover',
    model: 'Range Rover Sport',
    year: 2023,
    price: {
      ngn: 105000000,
      usd: 127000
    },
    images: [
      '/assets/productimg/benze5.png'
    ],
    thumbnail: '/assets/productimg/benze5.png',
    status: 'available',
    category: 'luxury',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'The pinnacle of luxury SUVs. Range Rover Sport combines elegance with off-road capability.',
    features: [
      'Pivi Pro Infotainment',
      'Meridian Sound System',
      'Air Suspension',
      'Terrain Response 2',
      'Configurable Dynamics',
      'Panoramic Roof',
      'Matrix LED Headlights',
      '3D Surround Camera'
    ],
    specifications: {
      engine: '3.0L Inline-6 MHEV',
      horsepower: '395 HP',
      seats: 5,
      doors: 4,
      color: 'Santorini Black',
      interiorColor: 'Ebony/Cirrus Leather'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: true,
    isRecentlySold: false,
    createdAt: '2025-01-07T10:00:00Z',
    updatedAt: '2025-01-07T10:00:00Z'
  },
  {
    id: '11',
    title: '2023 Chevrolet Silverado 1500 LTZ',
    slug: 'chevrolet-silverado-2023',
    name: '2023 Chevrolet Silverado 1500 LTZ',
    make: 'Chevrolet',
    model: 'Silverado 1500',
    year: 2023,
    price: {
      ngn: 55000000,
      usd: 66500
    },
    images: [
      '/assets/productimg/lexus2.png'
    ],
    thumbnail: '/assets/productimg/lexus2.png',
    status: 'available',
    category: 'truck',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'diesel',
    description: 'Powerful and capable Chevrolet Silverado. Built for work and adventure.',
    features: [
      '13-inch Touchscreen',
      'Bose Audio',
      'Wireless CarPlay',
      'Bed Liner',
      'Tow Package',
      'Remote Start',
      'LED Lighting',
      'Leather Seats'
    ],
    specifications: {
      engine: '5.3L V8',
      horsepower: '355 HP',
      seats: 5,
      doors: 4,
      color: 'Silver Ice',
      interiorColor: 'Jet Black Leather'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: false,
    createdAt: '2025-01-06T10:00:00Z',
    updatedAt: '2025-01-06T10:00:00Z'
  },
  {
    id: '12',
    title: '2023 Hyundai Palisade Calligraphy',
    slug: 'hyundai-palisade-2023',
    name: '2023 Hyundai Palisade Calligraphy',
    make: 'Hyundai',
    model: 'Palisade',
    year: 2023,
    price: {
      ngn: 45000000,
      usd: 54500
    },
    images: [
      '/assets/productimg/toyotal3.png'
    ],
    thumbnail: '/assets/productimg/toyotal3.png',
    status: 'available',
    category: 'suv',
    condition: 'new',
    mileage: 0,
    transmission: 'automatic',
    fuelType: 'petrol',
    description: 'Luxurious 8-seater SUV with exceptional value. Perfect for large families.',
    features: [
      '8-Passenger Seating',
      'Nappa Leather',
      '12.3-inch Digital Cluster',
      'Harman Kardon Premium Audio',
      'Highway Driving Assist',
      'Heads-Up Display',
      'Rain-Sensing Wipers',
      'Power Sunshade'
    ],
    specifications: {
      engine: '3.8L V6',
      horsepower: '291 HP',
      seats: 8,
      doors: 4,
      color: 'Moonlight Cloud',
      interiorColor: 'Nappa Leather Beige'
    },
    paymentOptions: {
      downPaymentPercentage: 40,
      preOrderFeePercentage: 5
    },
    isFeatured: false,
    isRecentlySold: true,
    createdAt: '2025-01-05T10:00:00Z',
    updatedAt: '2025-01-20T10:00:00Z'
  }
];

// Helper function to get featured cars
export function getFeaturedCars(): Cars[] {
  return products.filter(car => car.isFeatured);
}

// Helper function to get recently sold cars
export function getRecentlySoldCars(): Cars[] {
  return products.filter(car => car.isRecentlySold);
}

// Helper function to get available cars
export function getAvailableCars(): Cars[] {
  return products.filter(car => car.status === 'available');
}

// Helper function to get pre-order cars
export function getPreOrderCars(): Cars[] {
  return products.filter(car => car.status === 'pre-order');
}

export function getProductBySlug(slug: string): Cars | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Cars[] {
  return products.filter(
    (product) => product.category === category
  );
}

export function getProductsByMake(make: string): Cars[] {
  return products.filter(
    (product) => product.make === make
  );
}