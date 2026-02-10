"use client";

import useSWR from "swr";
import style from "./page.module.css";


const fetcher = (url) => fetch(url).then((res) => res.json());

const DashboardPage = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="gap-8">

      {data.slice(0, 15).map((post) => (
        <div key={post.id}>
          <h3 className="gap-5">{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
