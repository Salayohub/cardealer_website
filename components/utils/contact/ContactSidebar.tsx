import {
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import { CONTACT_INFO, DEPARTMENTS } from '@/lib/companyinfo';

export default function ContactSidebar() {
  return (
    <aside className="space-y-8">
      {/* Business Hours */}
      <div className="bg-blue-50 border rounded-2xl p-8">
        <Clock className="w-7 h-7 text-blue-600 mb-4" />
        <h3 className="text-xl font-black mb-4">Business Hours</h3>

        <ul className="space-y-3 text-sm">
          <li className="flex justify-between border-b pb-2">
            <span>Monday – Friday</span>
            <span>8:00 AM – 6:00 PM</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Saturday</span>
            <span>9:00 AM – 5:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span className="text-red-600 font-bold">Closed</span>
          </li>
        </ul>
      </div>

      {/* Departments */}
      <div className="bg-red-50 border rounded-2xl p-8">
        <h3 className="text-xl font-black mb-6">Contact by Department</h3>
        <div className="space-y-4">
          {DEPARTMENTS.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <div key={i} className="flex gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">{dept.title}</h4>
                  <p className="text-xs text-gray-600">{dept.description}</p>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-sm text-red-600 font-semibold"
                  >
                    {dept.email}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-purple-50 border rounded-2xl p-8">
        <h3 className="text-xl font-black mb-6">Follow Us</h3>

        <div className="grid grid-cols-3 gap-3">
          {[
            ['facebook', Facebook],
            ['instagram', Instagram],
            ['twitter', Twitter],
            ['youtube', Youtube],
            ['linkedin', Linkedin],
          ].map(([key, Icon]: any) => (
            <a
              key={key}
              href={(CONTACT_INFO.social as any)[key]}
              target="_blank"
              className="bg-linear-to-br from-gray-700 to-gray-900 rounded-xl p-4 text-white text-center hover:scale-105 transition"
            >
              <Icon className="mx-auto mb-2 w-5 h-5" />
              <span className="text-xs font-bold capitalize">{key}</span>
            </a>
          ))}

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            className="bg-green-600 rounded-xl p-4 text-white text-center hover:scale-105 transition"
          >
            <MessageCircle className="mx-auto mb-2 w-5 h-5" />
            <span className="text-xs font-bold">WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
