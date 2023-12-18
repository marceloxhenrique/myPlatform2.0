"use client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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

type CourseIdProps = {
  id: string;
  title: string;
  description: string | null;
  createdAt: Date;
  updateAt: Date;
  imageUrl: string | null;
  isPublished: boolean;
} | null;
export default function TitleForm({
  courseData,
}: {
  courseData: CourseIdProps;
}) {
  const form = useForm<z.infer<typeof createCourseTitleFormSchema>>({
    resolver: zodResolver(createCourseTitleFormSchema),
    defaultValues: {
      title: courseData?.title,
    },
  });
  const router = useRouter();
  async function onSubmit(data: ProfileFormValues) {
    console.log("data", data);
    try {
      const res = await axios.patch(`/api/courses/${courseData?.id}`, data);
      router.refresh();
    } catch (error) {
      console.error("Error in onSubmit:", error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="rounded-md bg-slate-200 p-4 px-5 py-2 ">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input placeholder="Course name" {...field} />
                </FormControl>
                <FormDescription>
                  What are you gonig to teach in this course?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-500">
            Continue
          </Button>
        </section>
      </form>
    </Form>
  );
}
