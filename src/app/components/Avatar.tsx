import React from "react";
type AvatarSize = "sm" | "md" | "lg";
type Props = {
  image?: string | null;
  size: AvatarSize;
  border: boolean;
};
export default function Avatar({ image, size = "md", border = false }: Props) {
  return (
    <div className={getContainerStyle(size, border)}>
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, border: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = border
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatarSize): string {
  switch (size) {
    case "sm":
      return "w-9 h-9";
    case "md":
      return "w-11 h-11";
    case "lg":
      return "w-[64px] h-[64px]";
  }
}

function getImageSizeStyle(size: AvatarSize): string {
  switch (size) {
    case "sm":
      return "w-[34px] h-[34px] p-[0.1rem]";
    case "md":
      return "w-[40px] h-[40px] p-[0.1rem]";
    case "lg":
      return "w-[60px] h-[60px] p-[0.1rem]";
  }
}
// export default function Avatar({ image, size, border }: Props) {
//   return (
//     <div className={getBigCircleStyle(size, border)}>
//       <div className={getSmallCircleStyle(size)}>
//         <div className="rounded-full overflow-hidden h-[58px] w-[58px] ">
//           <img
//             className="object-cover h-full w-full"
//             src={image ?? undefined}
//             alt="user profile"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function getBigCircleStyle(size: string, border: boolean): string {
//   return clsx({
//     "w-8 h-8": size === "sm",
//     "w-12 h-12": size === "md",
//     "w-[66px] h-[66px]": size === "lg",
//     "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300":
//       border === true,
//     "rounded-full overflow-hidden flex justify-center items-center": true,
//   });
// }

// function getSmallCircleStyle(size: string): string {
//   return clsx({
//     "flex justify-center items-center rounded-full overflow-hidden w-11 h-11 bg-white":
//       size === "md",
//     "flex justify-center items-center rounded-full overflow-hidden w-[61px] h-[61px] bg-white":
//       size === "lg",
//   });
// }
