"use server";
import { Posts, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Posts[]> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
    method: "GET",
    cache: "no-store",
  });
  const posts = await data.json();
  const post = posts.table;
  return post;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
