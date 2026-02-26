// app/api/products/[slug]/route.ts
import { NextResponse } from 'next/server';
import { products } from '@/lib/db/products';
import { Cars } from '@/types/interfaces';

interface RouteContext {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(
  req: Request,
  context: RouteContext
) {
  try {
    const { slug } = await context.params; // ✅ MUST AWAIT

    const product: Cars | undefined = products.find(
      (car) => car.slug === slug
    );

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: 'Car not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error('[API_PRODUCT_SLUG_ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
