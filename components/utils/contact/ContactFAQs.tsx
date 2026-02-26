'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/companyinfo';

export default function ContactFAQs() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-xl overflow-hidden hover:border-red-300 transition"
            >
              <button
                onClick={() =>
                  setActiveFAQ(activeFAQ === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold">{faq.question}</span>
                <ChevronDown
                  className={`transition ${
                    activeFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeFAQ === index && (
                <div className="px-6 pb-6 animate-slide-down">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
