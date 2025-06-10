"use server";

import Testing from "@/ui/Testing";

export default async function Page() {

  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  //console.log(posts);
  

  return (
    <div>
      {/*  */}
      <h1>Hola mundo!</h1>
      <Testing params={posts} />

      {/* <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      </ul> */}
    </div>
  )
}