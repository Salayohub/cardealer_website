'use client';

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
    icon: <Car />,
    color: '#dc2626',
    gradient: 'from-red-500 to-red-600'
  },
  {
    type: 'import-quote',
    title: 'Import Quote',
    description: 'Request a quote for importing your desired vehicle',
    icon: <Globe />,
    color: '#2563eb',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    type: 'car-loan',
    title: 'Car Loan',
    description: 'Apply for flexible financing to drive your dream car today',
    icon: <DollarSign />,
    color: '#059669',
    gradient: 'from-green-500 to-green-600'
  },
  {
    type: 'part-quote',
    title: 'Parts Quote',
    description: 'Get competitive quotes for genuine automotive parts',
    icon: <Wrench />,
    color: '#ea580c',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    type: 'pre-order',
    title: 'Pre-Order',
    description: 'Reserve and customize your next vehicle before arrival',
    icon: <ShoppingCart />,
    color: '#7c3aed',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    type: 'car-request',
    title: 'Car Request',
    description: 'Tell us your requirements and we\'ll find the perfect match',
    icon: <Search />,
    color: '#0891b2',
    gradient: 'from-cyan-500 to-cyan-600'
  }
];

// ============================================
// COMPONENT
// ============================================

export default function FormsIndexPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Work+Sans:wght@400;500;600;700&display=swap');

        .forms-page {
          font-family: 'Work Sans', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          position: relative;
          overflow: hidden;
        }

        .forms-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
        }

        .forms-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px);
        }

        .forms-header {
          text-align: center;
          margin-bottom: clamp(60px, 8vw, 80px);
        }

        .forms-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.2);
          color: #fca5a5;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 20px;
          border-radius: 999px;
          margin-bottom: 24px;
        }

        .forms-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          color: #fff;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }

        .forms-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          max-width: 700px;
          margin: 0 auto;
        }

        .forms-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .forms-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        @media (min-width: 1024px) {
          .forms-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
        }

        .form-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 32px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          display: block;
        }

        .form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-gradient);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .form-card:hover {
          transform: translateY(-8px);
          border-color: var(--card-color);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .form-card:hover::before {
          opacity: 1;
        }

        .form-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: var(--card-gradient);
          border-radius: 16px;
          margin-bottom: 24px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-card:hover .form-icon-wrap {
          transform: scale(1.1) rotate(-5deg);
        }

        .form-icon-wrap svg {
          width: 32px;
          height: 32px;
          color: #fff;
        }

        .form-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px 0;
          letter-spacing: -0.01em;
        }

        .form-card-desc {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 24px 0;
        }

        .form-card-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          transition: gap 0.3s;
        }

        .form-card:hover .form-card-action {
          gap: 12px;
        }

        .form-card-action svg {
          width: 16px;
          height: 16px;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-card {
          animation: fade-in-up 0.6s ease-out backwards;
        }

        .form-card:nth-child(1) { animation-delay: 0.1s; }
        .form-card:nth-child(2) { animation-delay: 0.2s; }
        .form-card:nth-child(3) { animation-delay: 0.3s; }
        .form-card:nth-child(4) { animation-delay: 0.4s; }
        .form-card:nth-child(5) { animation-delay: 0.5s; }
        .form-card:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <div className="forms-page">
        <div className="forms-container">
          {/* Header */}
          <div className="forms-header">
            <div className="forms-badge">
              Request Forms
            </div>
            <h1 className="forms-title">
              How Can We Help You?
            </h1>
            <p className="forms-subtitle">
              Select the appropriate form below to submit your request. 
              Our team will respond within 24 hours.
            </p>
          </div>

          {/* Forms Grid */}
          <div className="forms-grid">
            {FORMS.map(form => (
              <Link
                key={form.type}
                href={`/forms/${form.type}`}
                className="form-card"
                style={{
                  '--card-color': form.color,
                  '--card-gradient': `linear-gradient(135deg, ${form.color}, ${form.color}dd)`
                } as any}
              >
                <div className="form-icon-wrap">
                  {form.icon}
                </div>

                <h2 className="form-card-title">
                  {form.title}
                </h2>

                <p className="form-card-desc">
                  {form.description}
                </p>

                <div className="form-card-action">
                  <span>Start Request</span>
                  <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}