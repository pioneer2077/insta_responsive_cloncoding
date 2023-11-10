export type User = {
  id: string;
  image: string;
  name: string;
  email: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export type Follower = {
  username: string;
  image: string;
};

export type UserData = {
  bookmarks: null;
  email: string;
  followers: Follower[];
  following: Follower[];
} & User;
