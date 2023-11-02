import { IUser } from "../type/login";
import { client } from "@/app/service/client";

export function addUser({ id, image, name, email, username }: IUser) {
  const loginUser = {
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
  client.createIfNotExists(loginUser).then((res) => {
    console.log(res);
  });
}
