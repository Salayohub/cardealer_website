// components/section/featured/FeaturedCarsSection.tsx
import { getFeaturedProducts } from '@/lib/api/products';
import FeaturedCarsClient from '../featured/FeaturedCarsClient';
import { Cars } from '@/types/interfaces';

export default async function FeaturedCarsSection() {
  let cars: Cars[] = [];
  try {
    cars = await getFeaturedProducts(); // server fetch
  } catch (err) {
    console.error('Failed to fetch featured cars', err);
  }

  if (!cars.length) return null;

  return <FeaturedCarsClient cars={cars} />;
}
