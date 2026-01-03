export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// panggil api pakai fetch
export async function getLastPost(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts: Post[] = await res.json();
  return posts;
  // memunculkan di terminal
  // console.log(await res.json());
}
