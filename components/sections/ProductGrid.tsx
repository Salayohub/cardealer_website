import { Cars } from "@/types/interfaces";
import ProductCard from "../cards/ProductCard";

interface ProductGridProps {
  products: Cars[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <p className="text-center text-gray-500">
        No products found.
      </p>
    );
  }

  return (
    <div className="grid  gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}