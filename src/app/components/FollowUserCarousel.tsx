import React from "react";
import { User } from "../type/user";
import Avatar from "./Avatar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
type Props = {
  user: User[];
};

export default function FollowUserCarousel({ user }: Props) {
  console.log(user);
  const responsive = {
    all: {
      breakpoint: { max: 1000000, min: 0 },
      items: 8,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {user.map((item: any, i: any) => {
        return (
          <button
            key={i}
            className="flex-col h-20 flex justify-around items-center"
          >
            <Avatar big={true} border={true} image={user[i].image} />
            <p className=" text-xs">{user[i].name}</p>
          </button>
        );
      })}
    </Carousel>
  );
}
