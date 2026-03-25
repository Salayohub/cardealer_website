import { apiFetch } from "./apiClient";
import { HeroBanner } from "@/types/interfaces";

export const getHeroContent = () => {
  return apiFetch<HeroBanner>("/hero");
};
