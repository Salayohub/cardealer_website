import { Cars, CarFilters, CarListResponse } from '@/types/interfaces';


const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

/**
 * Helper to build query string from filters
 */
function buildQuery(filters?: CarFilters) {
  if (!filters) return '';

  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });

  return params.toString();
}

/**
 * Fetch all products (cars)
 */
export async function getAllProducts(): Promise<Cars[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/products`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch products');

    const data = await res.json();
    return data.products ?? [];
  } catch (error) {
    console.error('[getAllProducts]', error);
    return [];
  }
}

//latest products grid

export async function fetchLatestProducts(limit = 6): Promise<Cars[]> {
  try {
    const res = await fetch(
      `/api/products?sort=latest&limit=${limit}`,
      { cache: 'no-store' }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return data.success ? data.products : [];
  } catch (error) {
    console.error('[fetchLatestProducts]', error);
    return [];
  }
}

/**
 * Fetch single product by slug
 */
export async function getProductBySlug(slug: string) {
  try {
    const res = await fetch(
  `${BASE_URL}/api/products/${slug}`,
  { cache: 'no-store' }
);


    if (!res.ok) return null;

    const data = await res.json();
    return data.success ? data.product : null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}


/**
 * Fetch featured products
 */
export async function getFeaturedProducts(
  limit: number = 8
): Promise<Cars[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/api/products?badge=true&limit=${limit}`,
      { cache: 'no-store' }
    );

    if (!res.ok) throw new Error('Failed to fetch featured products');

    const data = await res.json();
    return data.products ?? [];
  } catch (error) {
    console.error('[getFeaturedProducts]', error);
    return [];
  }
}




/**
 * Fetch cars with filters + pagination
 */
export async function getCars(
  filters?: CarFilters
): Promise<CarListResponse> {
  try {
    const query = buildQuery(filters);
    const url = query
      ? `${BASE_URL}/api/products?${query}`
      : `${BASE_URL}/api/products`;

    const res = await fetch(url, {
      cache: 'no-store',
    });

    

    if (!res.ok) {
      throw new Error('Failed to fetch cars');
    }

    const data = await res.json();

    return {
      cars: data.products ?? [],
      pagination: data.pagination,
    };
  } catch (error) {
    console.error('[getCars]', error);
    return {
      cars: [],
      pagination: {
        page: 1,
        limit: filters?.limit ?? 12,
        total: 0,
        totalPages: 1,
      },
    };
  }
}
