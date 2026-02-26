'use client';

import ContactHero from '@/components/utils/contact/ContactHero';
import ContactMethods from '@/components/utils/contact/ContactMethods';
import ContactSidebar from '@/components/utils/contact/ContactSidebar';
import ContactMap from '@/components/utils/contact/ContactMap';
import ContactFAQs from '@/components/utils/contact/ContactFAQs';
import ContactUsForm from '@/components/forms/ContactUsForm';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactMethods />

      {/* Form + Sidebar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-gray-50 border rounded-2xl p-8">
            <h2 className="text-3xl font-black mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              We typically respond within 24 hours.
            </p>
            <ContactUsForm />
          </div>

          <ContactSidebar />
        </div>
      </section>

      <ContactMap />
      <ContactFAQs />
    </main>
  );
}
