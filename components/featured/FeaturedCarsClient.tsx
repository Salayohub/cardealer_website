'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, ArrowUpRight, Gauge, Fuel, Settings, Star } from 'lucide-react';
import { Cars } from '@/types/interfaces';
import { SectionSkeleton } from '@/components/featured/FeaturedSkeleton';

interface Props {
  cars: Cars[];
}

const STATUS_MAP: Record<string, { label: string; dot: string }> = {
  available:  { label: 'Available',  dot: '#22c55e' },
  'pre-order':{ label: 'Pre-Order',  dot: '#f97316' },
  sold:       { label: 'Sold',       dot: '#ef4444' },
};

function fmtNGN(n: number) {
  return n >= 1_000_000 ? `₦${(n / 1_000_000).toFixed(1)}M` : `₦${n.toLocaleString()}`;
}

function fmtUSD(n: number) {
  return `$${n.toLocaleString()}`;
}

export default function FeaturedCarsClient({ cars }: Props) {
  const [active, setActive] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tick, setTick] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const INTERVAL = 6000;

  const resetTimer = useCallback(() => {
    if (!cars.length) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTick(0);

    intervalRef.current = setInterval(() => {
      setTick(prev => {
        if (prev >= 100) {
          setActive(curr => (curr + 1) % cars.length);
          return 0;
        }
        return prev + 100 / (INTERVAL / 100);
      });
    }, 100);
  }, [cars.length]);

  useEffect(() => {
    if (!cars.length) return;
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cars.length, resetTimer]);

  const goTo = (i: number) => { setActive(i); resetTimer(); };
  const prev = () => goTo((active - 1 + cars.length) % cars.length);
  const next = () => goTo((active + 1) % cars.length);

  if (!cars.length) return <SectionSkeleton />;

  const hero = cars[active];
  const status = STATUS_MAP[hero.status] ?? STATUS_MAP.available;

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden min-h-screen">
      <div className="relative max-w-350 mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pt-16 lg:pt-20 pb-10 lg:pb-14 gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-[#dc2626] border border-red-700/30 bg-red-700/10 rounded-full px-4 py-1 uppercase text-xs font-semibold mb-4">
              Featured Collection
            </p>
            <h2 className="text-white  font-light tracking-tight text-[clamp(2.6rem,5vw,4.2rem)] leading-tight">
              Handpicked for<br/><em>Discerning Buyers</em>
            </h2>
          </div>
          <Link href="/products" className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/10 transition">
            Browse All Vehicles <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Hero + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[.07] bg-linear-to-br from-[#141414] to-[#0f0f0f]">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[clamp(300px,44vw,580px)]">
            <Image
              key={hero.id}
              src={hero.images[0]}
              alt={hero.name}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
             
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#141414]/50 to-[#141414]" />
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div className="flex flex-wrap gap-2">
                {hero.badge && <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold">{hero.badge}</span>}
                <span className="px-3 py-1 rounded-full bg-black/50 text-white/90 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full" style={{ background: status.dot }} />
                  {status.label}
                </span>
              </div>
              <div className="text-white/40 text-xs">
                {String(active + 1).padStart(2, '0')} / {String(cars.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between p-8 lg:p-10">
            <div className="space-y-4">
              <p className="text-white/50 text-sm bg-white/5 border border-white/10 rounded-full px-3 py-1 inline-block">
                {hero.year} · {hero.make}
              </p>
              <h3 className="text-white font-bold text-[clamp(1.7rem,3vw,2.6rem)]">{hero.model}</h3>
              <p className="text-white/50 text-sm max-w-100">{hero.description.slice(0, 130)}{hero.description.length > 130 ? '…' : ''}</p>

              {/* Specs */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-white/70 text-xs">
                  <Gauge size={14} className="text-red-600" /> {hero.mileage === 0 ? 'Brand New' : `${hero.mileage.toLocaleString()} km`}
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-white/70 text-xs">
                  <Settings size={14} className="text-red-600" /> {hero.transmission}
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-white/70 text-xs">
                  <Fuel size={14} className="text-red-600" /> {hero.fuelType}
                </div>
                {hero.specifications?.horsepower && (
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-white/70 text-xs">
                    <Star size={14} className="text-red-600" /> {hero.specifications.horsepower}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="space-y-1">
                <div className="text-white/40 text-xs uppercase tracking-widest">Starting from</div>
                <div className="text-white font-bold text-3xl">{fmtNGN(hero.price.ngn)}</div>
                <div className="text-white/35 text-sm">{fmtUSD(hero.price.usd)}</div>
                <div className="inline-block mt-2 px-3 py-1 text-red-200 font-semibold bg-red-700/10 rounded-lg text-xs">
                  {hero.paymentOptions.downPaymentPercentage}% Down · Drive Today
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-3">
                <Link href={`/products/${hero.slug}`} className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition">
                  View Details <ArrowRight size={16}/>
                </Link>
                <a
                  href={`https://wa.me/2341234567890?text=${encodeURIComponent(`Hi, I'm interested in the ${hero.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Carousel Nav + Progress */}
            <div className="flex items-center gap-5 mt-6">
              <button onClick={prev} className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-red-600 transition">
                <ArrowLeft size={18} className="text-white"/>
              </button>
              <div className="flex-1 h-1 bg-white/20 rounded">
                <div className="h-full bg-red-600 rounded" style={{ width: `${tick}%` }} />
              </div>
              <button onClick={next} className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-red-600 transition">
                <ArrowRight size={18} className="text-white"/>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 overflow-x-auto mt-6 pb-6">
          {cars.map((car, i) => (
            <button
              key={car.id}
              onClick={() => goTo(i)}
              onMouseEnter={() => setHoveredId(car.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${i === active ? 'border-2 border-red-600' : 'border-2 border-white/10'}`}
              style={{
                width: i === active ? 280 : 200,
                height: 120,
                opacity: i === active ? 1 : hoveredId === car.id ? 0.9 : 0.55
              }}
            >
              <Image
                src={car.thumbnail || car.images[0]}
                alt={car.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                {car.year} {car.make} <br/> {fmtNGN(car.price.ngn)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}