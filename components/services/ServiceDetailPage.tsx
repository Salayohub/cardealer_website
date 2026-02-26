'use client';

import { useState } from 'react';
import {
  Check,
  ArrowRight,
  Phone,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import { ServiceDetail } from '@/types/interfaces';

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export default function ServiceDetailPage({
  service,
}: ServiceDetailPageProps) {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] =
    useState<'overview' | 'process' | 'pricing'>('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <p className="text-red-400 font-bold uppercase mb-4">
            {service.tagline}
          </p>

          <h1 className="text-4xl md:text-6xl font-black mb-6">
            {service.title}
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-10">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={service.ctaPrimary.link}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white bg-linear-to-r ${service.iconBg}`}
            >
              {service.ctaPrimary.text}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href={service.ctaSecondary.link}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold border border-white/30"
            >
              {service.ctaSecondary.text}
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LONG DESCRIPTION ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          {service.longDescription
            .split('\n\n')
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6"
            >
              <h3 className="font-black text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQs ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {service.faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-lg mb-4"
            >
              <button
                onClick={() =>
                  setActiveFAQ(activeFAQ === i ? null : i)
                }
                className="w-full flex justify-between p-6 font-bold"
              >
                {faq.question}
                <ChevronDown
                  className={`transition ${
                    activeFAQ === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeFAQ === i && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className={`py-20 bg-linear-to-br ${service.iconBg} text-white text-center`}
      >
        <h2 className="text-4xl font-black mb-6">
          Ready to Get Started?
        </h2>

        <Link
          href={service.ctaPrimary.link}
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold"
        >
          {service.ctaPrimary.text}
          <ArrowRight className="w-5 h-5" />
        </Link>

        <a
          href="tel:+2341234567890"
          className="mt-4 inline-flex items-center gap-2 border border-white/40 px-8 py-4 rounded-lg font-bold"
        >
          <Phone className="w-5 h-5" />
          Call Us
        </a>
      </section>
    </div>
  );
}
