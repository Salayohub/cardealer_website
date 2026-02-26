'use client';

import { Phone, MessageCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/companyinfo';

export default function ContactHero() {
  return (
    <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      {/* <div className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-2000" /> */}

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Send className="w-4 h-4" />
          <span className="text-sm font-bold uppercase">We’re Here to Help</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 animate-slide-up">
          Get In Touch
        </h1>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 animate-slide-up animation-delay-200">
          Have questions about our vehicles or services? Reach out and we’ll get back to you promptly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
          <a
            href={`tel:${CONTACT_INFO.phone.primary}`}
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:scale-105 transition shadow-xl"
          >
            <Phone className="inline w-5 h-5 mr-2" />
            Call Now
          </a>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition shadow-xl"
          >
            <MessageCircle className="inline w-5 h-5 mr-2" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
