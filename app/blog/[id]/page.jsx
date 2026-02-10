
const BlogIdPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  const post = await res.json();

  return (
    <div className="p-10">
      <h1>Blog page</h1>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default BlogIdPage;
