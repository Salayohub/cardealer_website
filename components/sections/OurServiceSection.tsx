'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { ALL_SERVICES } from '@/lib/service';
import { ServiceDetail } from '@/types/interfaces';
import { OurServicesProps } from '@/types/interfaces';




export default function OurServices({
  services = ALL_SERVICES,
  autoplay = true,
  autoplayInterval = 5000,
}: OurServicesProps) {
  // Carousel & hover state
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Calculate items per page based on screen width
  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const totalPages = Math.ceil(services.length / itemsPerPage);

  // Handle responsive resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get services for the current page
  const getCurrentServices = () => {
    const start = currentPage * itemsPerPage;
    return services.slice(start, start + itemsPerPage);
  };

  // Navigation handlers
  const goToNextPage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalPages]);

  const goToPrevPage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalPages]);

  // Optional autoplay
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(goToNextPage, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, goToNextPage]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div>
        <h2 className="text-4xl font-light tracking-tight mb-12 text-center">
          Our Services
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 text-lg leading-relaxed mb-16">
          From expert maintenance to bespoke modifications, our comprehensive services are designed to keep your vehicle performing at its best and reflecting your unique style. Explore our offerings and experience the excellence that sets us apart.
        </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentServices().map((service) => (
  <ServiceCard
    key={service.id}
    id={service.id}
    slug={service.slug}
    title={service.title}
    description={service.description}
    icon={service.icon}
    badge={service.badge}
    iconBg={service.iconBg}
    features={service.features.map(f => f.title)}
    variant="compact"
  />
))} </div>

        {/* Navigation Arrows (optional) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={goToPrevPage}
              className="p-3 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              &#8592;
            </button>
            <span className="text-gray-500 font-bold">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              className="p-3 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              &#8594;
            </button>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
