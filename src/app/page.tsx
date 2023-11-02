import { createClient } from "next-sanity";

export default function Home() {
  const client = createClient({
    projectId: "lqz08o01",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  // const pets = await client.fetch(`*[_type == "users"]`);

  return <div></div>;
}
