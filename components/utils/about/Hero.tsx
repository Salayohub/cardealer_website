'use client';

import { Award } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/companyinfo';

export default function Hero() {
  const yearsInBusiness = new Date().getFullYear() - COMPANY_INFO.founded;

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
          <Award className="w-4 h-4" />
          <span className="text-sm font-bold uppercase">
            Established {COMPANY_INFO.founded}
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black mb-6">
          About {COMPANY_INFO.name}
        </h1>

        <p className="text-xl text-red-400 font-bold mb-6">
          {COMPANY_INFO.tagline}
        </p>

        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10">
          {COMPANY_INFO.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <StatCard value={`${yearsInBusiness}+`} label="Years of Excellence" />
          <StatCard value="2,500+" label="Vehicles Sold" />
          <StatCard value="98%" label="Customer Satisfaction" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-xl p-6">
      <div className="text-3xl font-black">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}
