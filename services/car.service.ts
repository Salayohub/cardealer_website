import { Cars, CarFilters } from "@/types/interfaces"
import { apiFetch } from "./apiClient";

export const searchCars = (
  query: string,
  filters?: CarFilters
) => {
  const params = new URLSearchParams({
    q: query,
    ...filters,
  } as any);

  return apiFetch<Cars[]>(`/cars/search?${params.toString()}`);
};

