import React from "react";
import { Follower } from "../type/user";
import Avatar from "./Avatar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

type Props = {
  user: Follower[];
};

export default function FollowUserCarousel({ user }: Props) {
  const responsive = {
    all: {
      breakpoint: { max: 1000000, min: 0 },
      items: 8,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {user.map((item: Follower, i: any) => {
        return (
          <Link
            href={`/user/${item.username}`}
            key={i}
            className="flex-col h-20 flex justify-around items-center"
          >
            <Avatar big={true} border={true} image={item.image} />
            <p className=" text-xs">{item.username}</p>
          </Link>
        );
      })}
    </Carousel>
  );
}
