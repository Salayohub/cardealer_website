import Link from 'next/link';
import { ALL_SERVICES } from '@/lib/service';
import { ServiceCard } from '@/components/cards/ServiceCard';

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-black" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white text-center">
          <span className="inline-block mb-4 text-sm tracking-widest uppercase opacity-70">
            What We Offer
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Our Premium Services
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-white/80">
            From luxury car sales and global importation to financing,
            trade-ins, and expert engineering — everything you need,
            delivered with excellence.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <ServiceCard
                id = {service.id}
                slug={service.slug}
                title={service.shortTitle}
                description={service.description}
                icon={service.icon}
                iconBg={service.iconBg}
                badge={service.badge}
                features={service.features.map(f => f.description)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Not Sure Which Service You Need?
          </h2>

          <p className="text-gray-600 mb-10">
            Speak directly with our experts and we’ll guide you to the
            right solution.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-10 py-5 rounded-xl font-bold hover:scale-105 transition"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
