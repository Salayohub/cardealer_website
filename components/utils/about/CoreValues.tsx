import { CORE_VALUES } from '@/lib/companyinfo';

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="bg-white border rounded-2xl p-8 hover:shadow-xl transition"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}
                >
                  <Icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-black mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
