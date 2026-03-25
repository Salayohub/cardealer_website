'use client';

import { useState } from 'react';
import { Grid3x3, List, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/cards/ProductCard';
import { Cars, Pagination, Props } from '@/types/interfaces';
import { useRouter, useSearchParams } from 'next/navigation';




type ViewMode = 'grid' | 'list';

export default function CarsClient({
  initialCars,
  pagination,
}: Props) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // ✅ MOVE HOOKS HERE
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ ALSO MOVE THIS INSIDE
  const updatePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('page', String(newPage));

    router.push(`/products?${params.toString()}`);
  };


const getPageNumbers = () => {
  const total = pagination.totalPages;
  const current = pagination.page;
  const delta = 2; // how many pages around current

  const range: number[] = [];

  const start = Math.max(1, current - delta);
  const end = Math.min(total, current + delta);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
};

const pages = getPageNumbers();



  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-black">All Vehicles</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${
              viewMode === 'grid'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100'
            }`}
          >
            <Grid3x3 />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${
              viewMode === 'list'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100'
            }`}
          >
            <List />
          </button>
        </div>
      </div>

      {/* Products */}
      {initialCars.length === 0 ? (
        <div className="text-center py-24">
          <h3 className="text-2xl font-bold">No vehicles found</h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <>
          <div
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}
          >
            {initialCars.map(car => (
              <ProductCard
                key={car.id}
                product={car}
                variant={viewMode === 'list' ? 'featured' : 'default'}
              />
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
           <div className="flex justify-center mt-12 gap-2 items-center">
  {/* Prev */}
  <button
    onClick={() => updatePage(pagination.page - 1)}
    disabled={pagination.page === 1}
    className="px-3 py-2 border rounded"
  >
    <ChevronLeft />
  </button>

  {/* Page numbers */}
  {pages.map(page => (
    <button
      key={page}
      onClick={() => updatePage(page)}
      className={`px-4 py-2 border rounded ${
        page === pagination.page
          ? 'bg-red-600 text-white'
          : 'bg-white'
      }`}
    >
      {page}
    </button>
  ))}

  {/* Next */}
  <button
    onClick={() => updatePage(pagination.page + 1)}
    disabled={pagination.page === pagination.totalPages}
    className="px-3 py-2 border rounded"
  >
    <ChevronRight />
  </button>
</div>
          )}
        </>
      )}
    </section>
  );
}
