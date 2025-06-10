"use client"

import { Post_type } from "@/types/Post_type";

export default function Testing( {params} : {params: Post_type[]} ) {
  // params resive un array de objetos
  // por eso no podiamos extraer los valores de params

  return (
    <div>
      {params.map((value, index) => {
        const {author, category, content, date, id, title} = value;
        const id_string = id.toString();
        return (
          <div key={id_string} className="post_div">
            <p>{author}</p>
            <p>{category}</p>
            <p>{content}</p>
            <p>{date}</p>
            <p>{title}</p>
            <p>{id_string}</p>
          </div>
        )
      })}
    </div>
  )
}