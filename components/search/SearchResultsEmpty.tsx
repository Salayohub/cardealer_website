import Link from "next/link";

export default function SearchResultsEmpty() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold mb-4">
        Car not found
      </h2>
      <p className="text-gray-600 mb-6">
        We can import it for you with just a 5% pre-order commitment.
      </p>

      <Link
        href="/contact"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-md"
      >
        Request This Car
      </Link>
    </div>
  );
}
