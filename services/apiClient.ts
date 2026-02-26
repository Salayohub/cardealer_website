const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    next: { revalidate: 60 }, // ISR ready
  });

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
}
