import { getAllBlogPosts } from "@/app/blogPosts";
import fs from "fs/promises";
export default async function CreatePostPage() {
  const createBlogPost = async (formData: FormData) => {
    "use server";

    const rawData = Object.fromEntries(formData.entries()) as any;

    const newPost = {
      id: Date.now().toString(),
      slug: rawData.title.toLowerCase().split(" ").join("-"),
      ...rawData,
    };

    const blogPosts = await getAllBlogPosts();

    blogPosts.push(newPost);
    await fs.writeFile(
      "data/blog-posts.json",
      JSON.stringify(blogPosts, null, 2)
    );
  };

  return (
    <main>
      <h1>Create New Post</h1>

      <form
        action={createBlogPost}
        className="border p-4 flex flex-col gap-1 text-black"
      >
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />

        <label htmlFor="author">Author</label>
        <input id="author" name="author"></input>

        <label htmlFor="content">Title</label>
        <textarea id="content" name="content" rows={6}></textarea>

        <button className="mt-4 border-b-2 border-white text-white">
          {" "}
          Create Post
        </button>
      </form>
    </main>
  );
}
