import React from "react";
import Avatar from "../../Avatar";
type Props = {
  comments: {
    username: string;
    userImage: string;
    comment: string;
  }[];
};
export default function DetailModalComments({ comments }: Props) {
  return (
    <ul>
      {comments.map((comment, index) => {
        return <li key={index}>{comment.comment}</li>;
      })}
    </ul>
  );
}
