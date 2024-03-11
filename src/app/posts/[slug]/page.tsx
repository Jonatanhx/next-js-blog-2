import { getAllBlogPosts } from "@/app/blogPosts";
type PageProps = { params: { slug: string } };

export async function generateStaticParams() {
  const blogPosts = await getAllBlogPosts();
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostsPage({ params }: PageProps) {
  const blogPosts = await getAllBlogPosts();
  const blogPost = blogPosts.find((post) => post.slug === params.slug);

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
