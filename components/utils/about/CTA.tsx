import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-red-600 text-white text-center">
      <h2 className="text-4xl font-black mb-6">
        Ready to Find Your Perfect Car?
      </h2>
      <p className="max-w-xl mx-auto mb-10 text-white/90">
        Join thousands of satisfied customers who trust us.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/cars"
          className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold flex items-center gap-2"
        >
          Browse Inventory <ArrowRight />
        </Link>
        <Link
          href="/contact"
          className="border border-white px-8 py-4 rounded-lg font-bold"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
