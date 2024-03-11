import fs from "fs/promises";
import Link from "next/link";
export default async function home() {
  const data = await fs.readFile("data/blog-posts.json", { encoding: "utf-8" });

  const blogPosts = JSON.parse(data);

  const date = new Date().toUTCString();

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-8xl font-bold mt-8 mb-4 border-b-2 border-white">
        Blog
      </h1>
      <span className="mb-12">{date}</span>
      <h2 className="text-4xl mb-4">Latest posts</h2>
      <ul className="flex flex-col gap-4">
        {blogPosts.map((post: any) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post.id}
            className="border p-4"
          >
            <h3 className="text-4xl font-thin">{post.title}</h3>
            <span className="text-gray-300">{post.author}</span>
          </Link>
        ))}
      </ul>
    </main>
  );
}
