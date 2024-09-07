export default async function Home() {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
    method: "GET",
    cache: "no-store",
  })
    .then(async (response) =>
      console.log("response console:", await response.json())
    )
    .catch((error) => console.log("error console:", error));
  return <div className="font-bold">initial text</div>;
}
