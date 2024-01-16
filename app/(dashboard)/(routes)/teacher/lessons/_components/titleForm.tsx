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

const createLessonTitleFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
});

type ProfileFormValues = z.infer<typeof createLessonTitleFormSchema>;

type LessonIdProps = {
  id: string;
  title: string;
} | null;
export default function TitleForm({
  lessonData,
}: {
  lessonData: LessonIdProps;
}) {
  const form = useForm<z.infer<typeof createLessonTitleFormSchema>>({
    resolver: zodResolver(createLessonTitleFormSchema),
    defaultValues: {
      title: lessonData?.title,
    },
  });
  const router = useRouter();
  async function onSubmit(data: ProfileFormValues) {
    try {
      await axios.patch(`/api/lessons/${lessonData?.id}`, data);
      router.refresh();
    } catch (error) {
      console.error("Error in onSubmit:", error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="mb-4 rounded-md bg-slate-200 p-4 px-5 py-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lesson Title</FormLabel>
                <FormControl>
                  <Input placeholder="Course name" {...field} />
                </FormControl>
                <FormDescription>
                  What are you gonig to teach in this lesson?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-500">
            Save
          </Button>
        </section>
      </form>
    </Form>
  );
}
