import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-black mb-4">
          Vehicle Not Found 🚗
        </h1>

        <p className="text-gray-600 mb-8">
          This vehicle may have been sold or removed.
          We can help you source it from the USA, Canada,
          UAE, South Korea, or China.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/products"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold"
          >
            View Available Vehicles
          </Link>

          <Link
            href="/contact"
            className="border px-6 py-3 rounded-lg font-bold"
          >
            Request This Vehicle
          </Link>
        </div>
      </div>
    </section>
  );
}
