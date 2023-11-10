import React from "react";
import { Follower } from "../type/user";
import Avatar from "./Avatar";
import Carousel, { ArrowProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import ArrowButton from "./ui/ArrowButton";
type Props = {
  user: Follower[];
};

export default function FollowUserCarousel(
  { user }: Props,
  { onClick }: ArrowProps
) {
  const responsive = {
    all: {
      breakpoint: { max: 100000, min: 0 },
      items: 8,
    },
    // tablet: {
    //   breakpoint: { max: 500, min: 0 },
    //   items: 7,
    // },
  };
  return (
    <Carousel
      customLeftArrow={<ArrowButton direction="left" onClick={onClick} />}
      customRightArrow={<ArrowButton direction="right" onClick={onClick} />}
      containerClass="h-full w-full relative"
      responsive={responsive}
    >
      {user.map((item: Follower) => {
        return (
          <Link
            href={`/user/${item.username}`}
            key={item.username}
            className="flex-col h-20 flex justify-around items-center cursor-pointer"
          >
            <Avatar size={"lg"} border={true} image={item.image} />
            <p className=" text-xs">{item.username}</p>
          </Link>
        );
      })}
    </Carousel>
  );
}
