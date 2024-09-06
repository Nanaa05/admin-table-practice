import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "This field is required",
  }),
  content: z.string().min(1, {
    message: "This field is required",
  }),
});

export const create = async (values: z.infer<typeof formSchema>) => {
  if (values.title == "" || values.content == "") {
    return null;
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  // const result = await res.json();
  // console.log("api response: ", JSON.stringify(result));
};
