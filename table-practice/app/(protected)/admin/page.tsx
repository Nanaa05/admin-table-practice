"use server";
import { Posts, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Posts[]> {
  let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
    method: "GET",
    cache: "no-store",
  });
  let posts = await data.json();
  let post = posts.table;
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
