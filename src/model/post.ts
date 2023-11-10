export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};
export type SimplePost = Omit<FullPost, "comments"> & {
  comments: number;
};
export type Comment = {
  username: string;
  userImage: string;
  comment: string;
};
