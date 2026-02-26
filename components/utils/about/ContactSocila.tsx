import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/companyinfo';

export default function ContactSocial() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-black mb-6">Contact Information</h3>
          <Info icon={<Phone />} text={COMPANY_INFO.contact.phone} />
          <Info icon={<Mail />} text={COMPANY_INFO.contact.email} />
          <Info icon={<MapPin />} text={COMPANY_INFO.contact.address} />
        </div>

        <div>
          <h3 className="text-2xl font-black mb-6">Follow Us</h3>
          <div className="grid grid-cols-3 gap-4">
            <Social href={COMPANY_INFO.social.facebook} icon={<Facebook />} />
            <Social href={COMPANY_INFO.social.instagram} icon={<Instagram />} />
            <Social href={COMPANY_INFO.social.twitter} icon={<Twitter />} />
            <Social href={COMPANY_INFO.social.youtube} icon={<Youtube />} />
            <Social href={COMPANY_INFO.social.linkedin} icon={<Linkedin />} />
            <Social
              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`}
              icon={<MessageCircle />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, text }: any) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function Social({ href, icon }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-gray-900 text-white p-6 rounded-xl flex justify-center hover:scale-105 transition"
    >
      {icon}
    </a>
  );
}
