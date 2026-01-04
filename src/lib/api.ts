// import Post dari folder types
import { Post } from "@/types/post";

// panggil api pakai fetch
// memanggil data hanya 5
export async function getLastPost(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  const posts: Post[] = await res.json();
  return posts;
  // memunculkan di terminal
  // console.log(await res.json());
}
// memanggil detail Post
export async function getDetailPost(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();
  return post;
  // memunculkan di terminal
  // console.log(await res.json());
}
// menampilkan semua data
export async function getAllPost(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  return posts;
  // memunculkan di terminal
  // console.log(await res.json());
}
