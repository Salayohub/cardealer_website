import { STATS } from '@/lib/companyinfo';

export default function Stats() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16">
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-6 text-center"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-red-400" />
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
