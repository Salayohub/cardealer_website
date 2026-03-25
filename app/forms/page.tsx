import Link from 'next/link';
import {
  Car,
  Globe,
  DollarSign,
  Wrench,
  ShoppingCart,
  Search,
  ArrowRight
} from 'lucide-react';

// ============================================
// FORMS DATA
// ============================================

const FORMS = [
  {
    type: 'product-inquiry',
    title: 'Product Inquiry',
    description: 'Get detailed information about any vehicle in our inventory',
    icon: Car,
    gradient: 'from-red-500 to-red-600',
    border: 'hover:border-red-500'
  },
  {
    type: 'import-quote',
    title: 'Import Quote',
    description: 'Request a quote for importing your desired vehicle',
    icon: Globe,
    gradient: 'from-blue-500 to-blue-600',
    border: 'hover:border-blue-500'
  },
  {
    type: 'car-loan',
    title: 'Car Loan',
    description: 'Apply for flexible financing to drive your dream car today',
    icon: DollarSign,
    gradient: 'from-green-500 to-green-600',
    border: 'hover:border-green-500'
  },
  {
    type: 'part-quote',
    title: 'Parts Quote',
    description: 'Get competitive quotes for genuine automotive parts',
    icon: Wrench,
    gradient: 'from-orange-500 to-orange-600',
    border: 'hover:border-orange-500'
  },
  {
    type: 'pre-order',
    title: 'Pre-Order',
    description: 'Reserve and customize your next vehicle before arrival',
    icon: ShoppingCart,
    gradient: 'from-purple-500 to-purple-600',
    border: 'hover:border-purple-500'
  },
  {
    type: 'car-request',
    title: 'Car Request',
    description: 'Tell us your requirements and we\'ll find the perfect match',
    icon: Search,
    gradient: 'from-cyan-500 to-cyan-600',
    border: 'hover:border-cyan-500'
  }
];

// ============================================
// COMPONENT
// ============================================

export default function FormsIndexPage() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-900 to-slate-800 overflow-hidden">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size[50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 mb-6 text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-red-500/30 bg-red-500/10 text-red-300">
            Request Forms
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            How Can We Help You?
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed">
            Select the appropriate form below to submit your request.
            Our team will respond within 24 hours.
          </p>
        </div>

        {/* Forms Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FORMS.map((form, index) => {
            const Icon = form.icon;

            return (
              <Link
                key={form.type}
                href={`/forms/${form.type}`}
                className={`
                  group relative rounded-2xl p-8
                  bg-white/5 backdrop-blur-lg
                  border border-white/10
                  transition-all duration-500
                  hover:-translate-y-2 hover:bg-white/10
                  hover:shadow-2xl
                  ${form.border}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top Gradient Bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r ${form.gradient}`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-linear-to-br ${form.gradient} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {form.title}
                </h2>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-6 text-sm">
                  {form.description}
                </p>

                {/* Action */}
                <div className="inline-flex items-center text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3 gap-2">
                  <span>Start Request</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}