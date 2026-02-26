import { ServiceCardSkeleton } from '@/components/cards/ServiceCard';

export default function ServicesLoading() {
  return (
    <main className="bg-white">
      {/* HERO SKELETON */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-black" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <div className="h-4 w-40 bg-white/30 mx-auto mb-6 rounded" />
          <div className="h-10 w-3/4 bg-white/30 mx-auto rounded mb-4" />
          <div className="h-6 w-2/3 bg-white/20 mx-auto rounded" />
        </div>
      </section>

      {/* GRID SKELETON */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <ServiceCardSkeleton key={idx} />
          ))}
        </div>
      </section>
    </main>
  );
}
