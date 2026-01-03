import Link from "next/link";
import "./globals.css";

// panggil api pakai fetch
async function getLastPost() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const post = await res.json();
  return post;
  // memunculkan di terminal
  // console.log(await res.json());
}

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
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <div className="post-item" key={post.id}>
            <h2>
              <Link href="/">{post.title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}
