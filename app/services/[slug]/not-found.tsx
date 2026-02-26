import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-3xl font-bold">Service not found</h2>
      <p className="mt-4 text-gray-600">
        The service you’re looking for does not exist.
      </p>

      <Link
        href="/services"
        className="mt-6 inline-block text-primary font-medium underline"
      >
        Back to Services
      </Link>
    </section>
  );
}