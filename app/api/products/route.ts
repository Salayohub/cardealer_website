// app/api/products/route.ts
import { NextResponse } from 'next/server';
import { products } from '@/lib/db/products';
import { Cars, LatestProductsProps } from '@/types/interfaces';


export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get('search')?.toLowerCase();
    const category = searchParams.get('category');
    const status = searchParams.get('status');
    const condition = searchParams.get('condition');
    const make = searchParams.get('make');
    const featured = searchParams.get('featured');
    
    const sort = searchParams.get('sort');
    const page = Number(searchParams.get('page') || 1);
    const limit = Number(searchParams.get('limit') || 12);

    let results: Cars[] = [...products];

    // 🔍 Search
    if (search) {
      results = results.filter(car =>
        car.name.toLowerCase().includes(search) ||
        car.make.toLowerCase().includes(search) ||
        car.model.toLowerCase().includes(search)
      );
    }

    // 🎯 Filters
    if (category) {
      results = results.filter(car => car.category === category);
    }

    if (status) {
      results = results.filter(car => car.status === status);
    }

    if (condition) {
      results = results.filter(car => car.condition === condition);
    }

    if (make) {
      results = results.filter(car => car.make === make);
    }

   if (featured === 'true') {
    results = results.filter(car => car.isFeatured);
  }

  //productgrid
    if (sort === 'latest') {
    results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  if (limit) {
    results = results.slice(0, Number(limit));
  }


    // 📄 Pagination
    const total = results.length;
    const start = (page - 1) * limit;
    const paginated = results.slice(start, start + limit);


       

    return NextResponse.json({
      success: true,
      products: paginated,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('[API_PRODUCTS_ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
