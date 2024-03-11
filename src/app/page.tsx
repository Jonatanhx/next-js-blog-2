import fs from "fs/promises";
export default async function home() {
  const data = await fs.readFile("data/blog-posts.json", { encoding: "utf-8" });

  const blogPosts = JSON.parse(data);

  console.log(blogPosts);

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-8xl font-bold mt-8 mb-12 border-b-2 border-white">
        Blog
      </h1>

      <h2 className="text-4xl mb-4">Latest posts</h2>
      <ul className="flex flex-col gap-4">
        {blogPosts.map((post: any) => (
          <li key={post.id} className="border p-4 hover: cursor-pointer">
            <h3 className="text-4xl font-thin">{post.title}</h3>
            <span className="text-gray-300">{post.author}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
