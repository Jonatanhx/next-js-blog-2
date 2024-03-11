import fs from "fs/promises";
type PageProps = { params: { slug: string } };

export async function generateStaticParams() {
  const data = await fs.readFile("data/blog-posts.json", { encoding: "utf-8" });
  const blogPosts = JSON.parse(data);
  return blogPosts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostsPage({ params }: PageProps) {
  const data = await fs.readFile("data/blog-posts.json", { encoding: "utf-8" });
  const blogPosts = JSON.parse(data);
  const blogPost = blogPosts.find((post: any) => post.slug === params.slug);

  if (!blogPost) {
    return (
      <main>
        <span>Blog post does not exist - 404</span>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-2 ml-12">
      <h1 className="text-4xl mt-10 border-b-2">{blogPost.title}</h1>
      <div className="text-gray-400 flex flex-col">
        <span>{blogPost.author}</span>
        <span>{new Date().toUTCString()}</span>
      </div>
      <p>{blogPost.content}</p>
    </main>
  );
}
