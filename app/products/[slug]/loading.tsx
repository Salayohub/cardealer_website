export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-gray-200 rounded-xl h-80" />
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 w-1/3 rounded" />
          <div className="h-10 bg-gray-200 w-3/4 rounded" />
          <div className="h-4 bg-gray-200 w-full rounded" />
          <div className="h-8 bg-gray-200 w-1/2 rounded" />
        </div>
      </div>
    </section>
  );
}
