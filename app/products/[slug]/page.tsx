import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/api/products';
import ProductClient from './ProductClient';
import type { Metadata } from 'next';
import { PageProps } from '@/types/interfaces';

export const dynamic = 'force-dynamic';


/**
 * SEO metadata
 */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Excellent J & C Autos',
      description: 'This vehicle is no longer available.',
    };
  }

  return {
    title: `${product.name} (${product.year}) | Excellent J & C Autos`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}

