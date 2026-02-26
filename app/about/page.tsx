import Hero from '@/components/utils/about/Hero';
import MissionVision from '@/components/utils/about/MissionVision';
import CoreValues from '@/components/utils/about/CoreValues';
import Timeline from '@/components/utils/about/Timeline';
import Stats from '@/components/utils/about/Stats';
import WhyChooseUs from '@/components/utils/about/WhyChooseUs';
import ContactSocial from '@/components/utils/about/ContactSocila';
import CTA from '@/components/utils/about/CTA';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about our journey, values, and commitment to excellence',
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Hero />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <Stats />
      <WhyChooseUs />
      <ContactSocial />
      <CTA />
    </main>
  );
}
