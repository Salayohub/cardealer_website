import { apiFetch } from "./apiClient";
import { HeroContent } from "@/types/hero";

export const getHeroContent = () => {
  return apiFetch<HeroContent>("/hero");
};
