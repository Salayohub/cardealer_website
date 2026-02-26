import { BlogPost } from '../types/interfaces';


export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'top-10-cars-for-nigerian-roads-2024',
    title: 'Top 10 Best Cars for Nigerian Roads in 2024',
    excerpt: 'Discover the most reliable and suitable vehicles for Nigerian road conditions. From fuel efficiency to durability, we break down the best options.',
    content: `When choosing a car in Nigeria, you need to consider factors like fuel efficiency, ground clearance, spare parts availability, and durability on rough roads. Here are our top 10 picks...`,
    author: {
      name: 'Emmanuel Okafor',
      avatar: 'https://i.pravatar.cc/150?img=12',
      bio: 'Senior Automotive Consultant with 15+ years experience'
    },
    category: 'buying-guide',
    tags: ['car guide', 'Nigeria', 'SUV', 'sedan'],
    featuredImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
    readTime: 8,
    publishedAt: '2024-12-15T10:00:00Z',
    updatedAt: '2024-12-15T10:00:00Z',
    isFeatured: true
  },
  {
    id: '2',
    slug: 'electric-vehicles-coming-to-nigeria',
    title: 'Electric Vehicles: The Future of Transportation in Nigeria',
    excerpt: 'As Nigeria moves towards sustainable energy, electric vehicles are becoming more accessible. Learn about the EV revolution and what it means for you.',
    content: `Electric vehicles are no longer a distant dream in Nigeria. With improving infrastructure and government incentives, EVs are becoming a viable option...`,
    author: {
      name: 'Chioma Adeyemi',
      avatar: 'https://i.pravatar.cc/150?img=45',
      bio: 'Electric Vehicle Specialist & Environmental Advocate'
    },
    category: 'news',
    tags: ['electric cars', 'Tesla', 'environment', 'technology'],
    featuredImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
    readTime: 6,
    publishedAt: '2024-12-20T10:00:00Z',
    updatedAt: '2024-12-20T10:00:00Z',
    isFeatured: true
  },
  {
    id: '3',
    slug: 'car-maintenance-tips-rainy-season',
    title: '7 Essential Car Maintenance Tips for the Rainy Season',
    excerpt: 'Protect your vehicle during rainy season with these practical maintenance tips. Keep your car running smoothly in wet conditions.',
    content: `The rainy season in Nigeria can be tough on vehicles. Here are essential maintenance tips to keep your car in top condition...`,
    author: {
      name: 'Tunde Bakare',
      avatar: 'https://i.pravatar.cc/150?img=33',
      bio: 'Certified Mechanic & Auto Care Expert'
    },
    category: 'maintenance',
    tags: ['maintenance', 'rainy season', 'car care', 'tips'],
    featuredImage: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800',
    readTime: 5,
    publishedAt: '2025-01-05T10:00:00Z',
    updatedAt: '2025-01-05T10:00:00Z',
    isFeatured: false
  },
  {
    id: '4',
    slug: 'toyota-camry-vs-honda-accord-2024',
    title: 'Toyota Camry vs Honda Accord: Which Sedan Wins in 2024?',
    excerpt: 'A comprehensive comparison of two of the most popular sedans in Nigeria. We analyze performance, features, reliability, and value.',
    content: `Both the Toyota Camry and Honda Accord are excellent sedans, but which one is right for you? Let's compare...`,
    author: {
      name: 'Emmanuel Okafor',
      avatar: 'https://i.pravatar.cc/150?img=12',
      bio: 'Senior Automotive Consultant with 15+ years experience'
    },
    category: 'reviews',
    tags: ['comparison', 'Toyota', 'Honda', 'sedan'],
    featuredImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    readTime: 10,
    publishedAt: '2025-01-10T10:00:00Z',
    updatedAt: '2025-01-10T10:00:00Z',
    isFeatured: true
  },
  {
    id: '5',
    slug: 'how-to-negotiate-best-car-price',
    title: 'How to Negotiate the Best Price When Buying a Car',
    excerpt: 'Master the art of car negotiation with these proven strategies. Get the best deal without compromising on quality.',
    content: `Negotiating a car purchase can be intimidating, but with these tips, you'll be confident and successful...`,
    author: {
      name: 'Ngozi Eze',
      avatar: 'https://i.pravatar.cc/150?img=47',
      bio: 'Sales Director & Customer Advocate'
    },
    category: 'tips',
    tags: ['buying tips', 'negotiation', 'finance', 'advice'],
    featuredImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    readTime: 7,
    publishedAt: '2025-01-12T10:00:00Z',
    updatedAt: '2025-01-12T10:00:00Z',
    isFeatured: false
  },
  {
    id: '6',
    slug: 'luxury-suv-buying-guide-nigeria',
    title: 'Luxury SUV Buying Guide: Top Choices for Nigerian Executives',
    excerpt: 'Explore the best luxury SUVs available in Nigeria. From Mercedes-Benz to Range Rover, find your perfect executive vehicle.',
    content: `For executives and professionals, a luxury SUV is more than transportation—it's a statement. Here are the top options...`,
    author: {
      name: 'Emmanuel Okafor',
      avatar: 'https://i.pravatar.cc/150?img=12',
      bio: 'Senior Automotive Consultant with 15+ years experience'
    },
    category: 'buying-guide',
    tags: ['luxury', 'SUV', 'executive', 'premium'],
    featuredImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    readTime: 9,
    publishedAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
    isFeatured: false
  }
];
