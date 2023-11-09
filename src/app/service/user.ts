import { IUser } from "../type/login";
import { client } from "@/app/service/client";

export function addUser({ id, image, name, email, username }: IUser) {
  const signUpUser = {
    _id: id,
    _type: "user",
    name,
    email,
    image,
    username,
    following: [],
    followers: [],
    bookmarks: [],
  };
  client.createIfNotExists(signUpUser).then((res) => {});
}
export async function getUserByUsername(username: string) {
  return client.fetch(`*[_type == "user" && username == ${username}][0]{
    ...,
    "id": _id,
    following[]->{username,image},
    followers[]->{username,image},
    "bookmarks":bookmarks[]->id
  }`);
}
