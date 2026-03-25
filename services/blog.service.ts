import { apiFetch } from "./apiClient";
import { BlogPost } from "@/types/interfaces";

export const getBlogs = () => {
  return apiFetch<BlogPost[]>("/blogs");
};

export const getBlogBySlug = (slug: string) => {
  return apiFetch<BlogPost>(`/blogs/${slug}`);
};
