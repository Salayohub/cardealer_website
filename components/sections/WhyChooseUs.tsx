'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Shield,
  Award,
  TrendingUp,
  Users,
  Heart,
  Zap,
  CheckCircle2,
  Star,
  ThumbsUp,
} from 'lucide-react';

/* ─────────────────────────────────────────────── */
/* Count Up Hook */
/* ─────────────────────────────────────────────── */

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = Date.now();

        const animate = () => {
          const progress = Math.min((Date.now() - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(end * eased));

          if (progress < 1) requestAnimationFrame(animate);
        };

        animate();
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

/* ─────────────────────────────────────────────── */
/* Main Section */
/* ─────────────────────────────────────────────── */

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-28 bg-linear-to-b from-white via-neutral-50 to-white overflow-hidden">

      {/* subtle red radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs tracking-[0.2em] uppercase bg-red-50 text-red-600 rounded-full border border-red-100">
            <Star size={14} />
            Why Choose Us
          </div>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900">
            Nigeria’s <span className="text-red-600 font-medium">Most Trusted</span> Automotive Partner
          </h2>

          <p className="mt-6 text-neutral-600 leading-relaxed text-lg">
            Premium vehicles, transparent pricing, and customer-first service —
            crafted for those who demand excellence.
          </p>
        </div>

        <StatsGrid />

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard icon={<Award size={22} />} title="Premium Quality" description="Every vehicle passes a rigorous inspection process before reaching our showroom." />
          <FeatureCard icon={<Shield size={22} />} title="Transparent Pricing" description="No hidden fees. Clear documentation and honest pricing every time." />
          <FeatureCard icon={<ThumbsUp size={22} />} title="Customer First" description="We prioritize your needs and ensure a seamless buying experience." />
          <FeatureCard icon={<Zap size={22} />} title="Fast Processing" description="Streamlined paperwork and quick delivery — your time matters." />
          <FeatureCard icon={<Users size={22} />} title="Expert Guidance" description="Over a decade of automotive expertise to guide your decision." />
          <FeatureCard icon={<Heart size={22} />} title="After-Sales Care" description="Continued service and support long after your purchase." />
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── */
/* Stats Grid */
/* ─────────────────────────────────────────────── */

function StatsGrid() {
  const s1 = useCountUp(1200, 2500);
  const s2 = useCountUp(98, 2000);
  const s3 = useCountUp(100, 1800);

  return (
    <div className="grid md:grid-cols-3 gap-10 mb-24">

      <StatCard icon={<TrendingUp />} value={`${s1.count.toLocaleString()}+`} label="Vehicles Sold Yearly" refProp={s1.ref} />
      <StatCard icon={<CheckCircle2 />} value={`${s2.count}%`} label="Customer Satisfaction" refProp={s2.ref} />
      <StatCard icon={<Star />} value={`${s3.count}%`} label="Brand New Vehicles" refProp={s3.ref} />

    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  refProp,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  refProp: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={refProp}
      className="group relative p-12 rounded-2xl bg-white border border-neutral-200 hover:border-red-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 will-change-transform"
    >
      {/* red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition" />

      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-red-50 text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition">
        {icon}
      </div>

      <div className="text-5xl font-light tracking-tight text-neutral-900">
        {value}
      </div>

      <div className="mt-4 text-sm uppercase tracking-wider text-neutral-500">
        {label}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────── */
/* Feature Card */
/* ─────────────────────────────────────────────── */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-8 rounded-xl bg-white border border-neutral-200 hover:border-red-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 will-change-transform">

      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-50 text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-red-600 transition">
        {title}
      </h3>

      <p className="mt-3 text-neutral-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}