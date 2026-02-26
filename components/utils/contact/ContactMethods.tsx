import { CONTACT_METHODS } from '@/lib/companyinfo';

export default function ContactMethods() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CONTACT_METHODS.map((method, index) => {
          const Icon = method.icon;
          return (
            <a
              key={index}
              href={method.link}
              target="_blank"
              className="group bg-white border rounded-2xl p-6 hover:border-red-600 hover:shadow-xl transition"
            >
              <div
                className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-black mb-2">{method.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {method.description}
              </p>
              <p className="text-sm font-bold text-gray-900 break-all">
                {method.value}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
