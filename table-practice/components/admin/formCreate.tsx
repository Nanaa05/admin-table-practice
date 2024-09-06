"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { create } from "@/actions/createPost";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "This field is required",
  }),
  content: z.string().min(1, {
    message: "This field is required",
  }),
});

const FormCreate = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    create(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <div className="flex">
                <div className="flex flex-col justify-center w-14">
                  <FormLabel className="text-3xl">Title</FormLabel>
                </div>
                <div className="w-56 grow shrink"></div>

                <FormControl>
                  <Input className="h-16 text-3xl rounded-xl" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <div className="flex">
                <div className="flex flex-col justify-center w-14">
                  <FormLabel className="text-3xl">Content</FormLabel>
                </div>
                <div className="w-56 shrink"></div>

                <FormControl>
                  <Input className="h-16 text-3xl rounded-xl" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          {" "}
          <Button
            type="submit"
            className="w-fit h-fit text-3xl p-10 px-20 bg-green-500 text-white hover:bg-green-600 rounded-xl"
          >
            Create Post
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreate;
