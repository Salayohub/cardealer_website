"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CarSearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/cars?search=${query}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search car model..."
        className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-600"
      />
    </form>
  );
}
