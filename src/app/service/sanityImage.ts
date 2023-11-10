import React from "react";
import { client } from "@/app/service/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
export function urlFor(source: SanityImageSource) {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
}
