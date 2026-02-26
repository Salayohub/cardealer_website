import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import { ALL_SERVICES } from '@/lib/service';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // ✅ unwrap params

  const service = ALL_SERVICES.find(
    (s) => s.slug === slug
  );

  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
