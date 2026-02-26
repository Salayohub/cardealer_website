'use client';

import { useState } from 'react';
import { MILESTONES } from '@/lib/companyinfo';

export default function Timeline() {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900">Our Journey</h2>
          <p className="text-gray-600 mt-3">Milestones that shaped our story</p>
        </div>

        <div className="relative space-y-14">
          {MILESTONES.map((item, index) => (
            <div
              key={item.year}
              onMouseEnter={() => setActiveYear(item.year)}
              onMouseLeave={() => setActiveYear(null)}
              className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition"
            >
              <span
                className={`inline-block mb-4 px-5 py-2 rounded-full text-white font-bold transition ${
                  activeYear === item.year
                    ? 'bg-red-600 scale-110'
                    : 'bg-gray-800'
                }`}
              >
                {item.year}
              </span>

              <h3 className="text-2xl font-black text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
