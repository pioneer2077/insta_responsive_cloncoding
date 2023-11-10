import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "next-sanity";
import dotenv from "dotenv";
dotenv.config();
export const client = createClient({
  projectId: "fgty6diy",
  dataset: "production",
  apiVersion: "2023-11-25",
  useCdn: false,
  token: process.env.SANITY_SECRET_TOKEN,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).url();
}
