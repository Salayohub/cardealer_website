"use client";

import { CarFilter } from "@/types/car";

interface Props {
  onFilter: (filters: CarFilter) => void;
}

export default function FilterPanel({ onFilter }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <input
        type="number"
        placeholder="Min Price"
        onChange={e => onFilter({ minPrice: Number(e.target.value) })}
        className="border px-3 py-2 rounded"
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={e => onFilter({ maxPrice: Number(e.target.value) })}
        className="border px-3 py-2 rounded"
      />
      <select
        onChange={e => onFilter({ status: e.target.value as any })}
        className="border px-3 py-2 rounded"
      >
        <option value="">Status</option>
        <option value="available">Available</option>
        <option value="preorder">Pre-order</option>
      </select>
    </div>
  );
}
