import { groq } from "next-sanity";
import { client } from "@/app/service/client";
export async function getProfile() {
  return client.fetch(groq`*[_type == "user"]`);
}
