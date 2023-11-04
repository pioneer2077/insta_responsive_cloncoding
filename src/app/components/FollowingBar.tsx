import React from "react";
import Avatar from "./Avatar";

export default function FollowingBar() {
  return (
    <div className="px- h-full w-full flex gap-4 items-center">
      {[1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7].map((item: any, i: any) => {
        return (
          <button
            key={i}
            className="flex-col h-20 flex justify-around items-center"
          >
            <Avatar
              big={true}
              border={true}
              image={
                "https://lh3.googleusercontent.com/a/ACg8ocJ0wiq-Ju7zP28u075jMYbafuYTJgx6VDJth-IYkJduxlY=s96-c"
              }
            />
            <p className=" text-xs">flight</p>
          </button>
        );
      })}
    </div>
  );
}
