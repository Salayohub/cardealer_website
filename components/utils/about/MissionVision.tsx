import { Target, Globe } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/companyinfo';

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <Card
          icon={<Target />}
          title="Our Mission"
          text={COMPANY_INFO.mission}
          color="from-red-500 to-red-600"
        />
        <Card
          icon={<Globe />}
          title="Our Vision"
          text={COMPANY_INFO.vision}
          color="from-blue-500 to-blue-600"
        />
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  text,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: string;
}) {
  return (
    <div className="bg-gray-50 border rounded-2xl p-10 hover:shadow-xl transition">
      <div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6`}
      >
        {icon}
      </div>
      <h2 className="text-3xl font-black mb-4">{title}</h2>
      <p className="text-gray-700 text-lg">{text}</p>
    </div>
  );
}
