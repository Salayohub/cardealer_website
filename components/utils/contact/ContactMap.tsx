import { MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/companyinfo';

export default function ContactMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Visit Our Showroom</h2>
          <p className="text-gray-600">
            We’re located in the heart of Lagos.
          </p>
        </div>

        <div className="bg-white border rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-96">
            <iframe
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${CONTACT_INFO.coordinates.lat},${CONTACT_INFO.coordinates.lng}&z=15&output=embed`}
            />
          </div>

          <div className="bg-red-600 text-white p-8 flex gap-4">
            <MapPin />
            <div>
              <h3 className="font-black text-lg">Excellent J & C Autos</h3>
              <p className="text-white/90">{CONTACT_INFO.address.full}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
