import "./globals.css";
import { getLastPost } from "@/lib/api";
// panggil file dari PostList
import PostList from "@/components/PostList";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
      <div className="main-heading">
        <h1>Selamat Datang Di Next JS News</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          minima vel ullam.
        </p>
        <PostList posts={posts} />
      </div>
    </>
  );
}
