import Image from "next/image";
import img from "../../public/poly.png.png";
export  const metadata = {
  title: "Blog",
  description: "About",
}

const BlogPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 10 } });

  const posts = await res.json();

  return (
    <div className="min-h-screen  flex flex-col left-0 justify-start items-start">
      {posts.map((item) => (
        <div
          key={item.id}
          className="hero left-0 justify-start  items-start flex mt-52"
        >
          <div className="hero-content flex left-0 lg:flex-row">
            <Image
              src={img}
              alt="Blog image"
              height={200}
              width={200}
            />

            <div>
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p >{item.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
