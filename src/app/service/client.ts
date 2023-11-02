import { createClient } from "next-sanity";
import dotenv from "dotenv";
dotenv.config();
export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-11-25",
  useCdn: false,
  token: process.env.SANITY_SECRET_TOKEN,
});
