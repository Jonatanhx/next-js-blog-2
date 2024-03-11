import fs from "fs/promises";
export default async function home() {
  const data = await fs.readFile("data.blog-posts-json", { encoding: "utf-8" });

  console.log(data);

  return (
    <main>
      <h1>blog</h1>
    </main>
  );
}
