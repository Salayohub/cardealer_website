import { getCars } from '@/lib/api/products';
import CarsClient from './CarsClient';
import type { PageProps } from '@/types/interfaces';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cars for Sale | Excellent J & C Autos',
  description:
    'Browse our wide selection of quality cars for sale at Excellent J & C Autos. Find your perfect vehicle today!',
};


export default async function CarsPage({ searchParams }: PageProps) {
  const page = Number(searchParams.page) || 1;

  const { cars, pagination } = await getCars({
    search: searchParams.search,
    category: searchParams.category,
    page,
    limit: 12,
  });

  return (
    <CarsClient
      initialCars={cars}
      pagination={pagination}
    />
  );
}
