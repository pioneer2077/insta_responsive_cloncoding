import { client, urlFor } from "@/app/service/client";
import { SimplePost } from "@/model/post";
const simplePostProjection = `
...,
"username": author->username,
"userImage": author->image,
"image": photo,
"likes": likes[]->username,
"text": comments[0].comment,
"comments":count(comments),
"id":_id,
"createdAt":_createdAt,
`;
export async function getPostsByAuthor(username: string) {
  return client
    .fetch(
      `
  *[_type == "post" && author->username == "${username}"|| author._ref in *[_type == "user" && username =="${username}"].following[]._ref]|order(_createdAt desc){${simplePostProjection}}
  `
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({
        ...post,
        image: urlFor(post.image),
      }))
    );
}

//게시글은 게시글인데, id가 동일한 게시글의 댓글만 가져오도록 한다.
export async function getPost(id: string) {
  return client
    .fetch(
      `*[_type == "post" && _id =="${id}"][0]{
    ...,
    "username": author->username,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    comments[]{comment, "username":author->username, "image":author->image},
    "id":_id,
    "createdAt":_createdAt,
  } 
  `
    )
    .then((posts) => ({ ...posts, image: urlFor(posts.image) }));
}
