'use client';

import { useState } from 'react';
import { Grid3x3, List, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/cards/ProductCard';
import { Cars, Pagination } from '@/types/interfaces';

type ViewMode = 'grid' | 'list';

interface Props {
  initialCars: Cars[];
  pagination: Pagination;
}

export default function CarsClient({
  initialCars,
  pagination,
}: Props) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

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
            <div className="flex justify-center mt-12 gap-2">
              <button
                disabled={pagination.page === 1}
                className="px-4 py-2 border rounded"
              >
                <ChevronLeft />
              </button>

              <span className="px-4 py-2 font-bold">
                {pagination.page} / {pagination.totalPages}
              </span>

              <button
                disabled={pagination.page === pagination.totalPages}
                className="px-4 py-2 border rounded"
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
