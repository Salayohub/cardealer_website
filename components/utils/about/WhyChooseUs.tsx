import { WHY_CHOOSE_US } from '@/lib/companyinfo';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-gray-50 border rounded-xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
