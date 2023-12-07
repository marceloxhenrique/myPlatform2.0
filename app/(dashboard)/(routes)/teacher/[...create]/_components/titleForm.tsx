"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UploadFileResponse } from "uploadthing/client";

const createCourseTitleFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
  
});

type ProfileFormValues = z.infer<typeof createCourseTitleFormSchema>;

export default function TitleForm() {
  const [newImageUrl, setNewImageUrl] = useState<
    UploadFileResponse<null>[] | undefined
  >();

  const form = useForm<z.infer<typeof createCourseTitleFormSchema>>({
    resolver: zodResolver(createCourseTitleFormSchema),
    defaultValues: {
      title: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: ProfileFormValues) {
      const res = await axios.post("/api/courses", data);
      form.reset();
      console.log(res);
  }
  return (
    
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <section className="bg-slate-200 p-4 rounded-md">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Course name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What are you gonig to teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
        </form>
      </Form>
  );
}
