'use client';

import { useEffect, useState } from 'react';
import { fetchLatestProducts } from '@/lib/api/products';
import { Cars } from '@/types/interfaces';
import ProductCard from '@/components/cards/ProductCard';
import LatestProductsSkeleton from '@/components/utils/LatestProductsSkeleton';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function LatestProductsGrid({ initialProducts }: { initialProducts: Cars[] }) {
  const [products, setProducts] = useState<Cars[]>(initialProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchLatestProducts(9);
        setProducts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <section className="relative bg-linear-to-b from-white via-neutral-50 to-white py-20">
      <div className="max-w-7xl mx-auto  lg:px-8">

        {/* Header */}
        <div className="flex flex-col px-10 lg:flex-row lg:items-end lg:justify-between mb-14 gap-8">

          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs tracking-widest uppercase bg-black text-white rounded-full">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Latest Collection
            </div>

            {/* Title */}
            <h2 className="text-4xl  md:text-5xl font-light tracking-tight text-neutral-900">
              Newly Added Vehicles
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-neutral-500 text-lg leading-relaxed ">
              Discover the newest arrivals in our premium inventory —
              carefully selected for performance, design, and prestige.
            </p>
          </div>

          {/* View All */}
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-900 border-b border-neutral-300 pb-1 hover:border-black transition-all"
          >
            View Full Inventory
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Grid */}
        <div className=" group h-full grid grid-cols-1 p-10 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {loading && <LatestProductsSkeleton />}

          {error && !loading && (
            <div className="col-span-full text-center py-20 text-neutral-500">
              Unable to load vehicles at the moment.
            </div>
          )}

          {!loading &&
            !error &&
            products.map((product) => (
              <div
                key={product.id}
                className="group transition-all duration-500 hover:-translate-y-2"
              >
                <ProductCard product={product} />
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}