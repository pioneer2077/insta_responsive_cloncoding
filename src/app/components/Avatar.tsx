import React from "react";
type Props = {
  image?: string | null;
};
export default function Avatar({ image }: Props) {
  console.log(image);
  return (
    <div className=" bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 w-12 h-12 rounded-full overflow-hidden flex justify-center items-center">
      <div className=" h-11 w-11 rounded-full overflow-hidden">
        <img src={image ?? undefined} alt="user profile" />
      </div>
    </div>
  );
}
