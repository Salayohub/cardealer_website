'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ServiceBannerDark() {
  return (
    <section className="relative py-32 text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/png-image/servicebannerimg.png"
          alt="Service Background"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Subtle Gradient Depth */}
      <div className="absolute inset-0 bg-linear-to-b from-red/180 via-red/160 to-red/190" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="group h-full flex flex-col p-12 rounded-2xl
                          bg-white/50 backdrop-blur-xl
                          border border-white/10
                          hover:border-white/20
                          hover:-translate-y-2
                          transition-all duration-500">

            <div className="relative w-14 h-14 mb-8">
              <Image
                src="/assets/png-image/maintenanceicon.png"
                alt="Auto Service"
              fill
              sizes="(max-width:640px) 40px, 56px"
                className="object-contain opacity-90"
              />
            </div>

            <h2 className="text-2xl text-red-500 font-light tracking-tight">
              Precision Auto Service
            </h2>

            <p className="mt-5 text-whiteleading-relaxed">
              Expert diagnostics and meticulous servicing to keep your
              vehicle performing at its finest. Experience care defined
              by precision and reliability.
            </p>

            <div className="mt-auto pt-10">
              <Link
                href="/appointment"
                className="inline-flex text-red-500 items-center gap-2 text-md font-bold tracking-wide
                           border-b border-white/40 pb-1
                           hover:border-white transition-all"
              >
                Schedule Service
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group h-full flex flex-col p-12 rounded-2xl
                          bg-white/50 backdrop-blur-xl
                          border border-white/10
                          hover:border-white/20
                          hover:-translate-y-2
                          transition-all duration-500">

            <div className="relative w-14 h-14 mb-8">
              <Image
                src="/assets/png-image/spareparticon.png"
                alt="Parts & Accessories"
                fill
                sizes="(max-width:640px) 40px, 56px"
                className="object-contain opacity-90"
              />
            </div>

            <h2 className="text-2xl text-red-500 font-light tracking-tight">
              Genuine Parts & Accessories
            </h2>

            <p className="mt-5 text-white leading-relaxed">
              Premium new and pre-owned components crafted for
              durability, performance, and seamless integration.
            </p>

            <div className="mt-auto pt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-red-500  text-md font-bold tracking-wide
                           border-b border-white/40 pb-1
                           hover:border-white transition-all"
              >
                Contact Our Team
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}