import fs from "fs/promises";
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  content: string;
}
export async function getAllBlogPosts() {
  const data = await fs.readFile("data/blog-posts.json", { encoding: "utf-8" });
  return JSON.parse(data) as BlogPost[];
}
