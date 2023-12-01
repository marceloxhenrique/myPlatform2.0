"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { UploadCloud } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

import { Textarea } from "@/components/ui/textarea";

const createCourseFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
  description: z
    .string()
    .max(160)
    .min(4, { message: "Description must be at least 4 characters" }),
  imageUrl: z.string({ required_error: "Thumbnail image is required" }),
  isPublished: z.boolean().refine((value) => value !== undefined, {
    message: "Status is required",
  }),
  lessons: z.array(
    z.object({
      title: z.string().url({ message: "at list one lesson is required" }),
      description: z
        .string()
        .max(160)
        .min(4, { message: "Description must be at least 4 characters" }),
      videoUrl: z.string().url({ message: "at list one lesson is required" }),
      courseId: z.string({ required_error: "CourseId required" }),
      isPublished: z.boolean().refine((value) => value !== undefined, {
        message: "Status is required",
      }),
    })
  ),
});

type ProfileFormValues = z.infer<typeof createCourseFormSchema>;

export default function CreateCourse({
  params,
}: {
  params: { course: string };
}) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      title: "",
      description: "",
      lessons: [],
    },
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    const { title } = createCourseFormSchema.parse(data);
    console.log(title);
    console.log(data.description);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Course name"
                  defaultValue={params.course}
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about this course"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {`Share key topics and concepts you'll cover in your course.`}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        askdajskdjasd sadjasjdkas
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <UploadCloud /> Upload a file
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  placeholder="Course name"
                  defaultValue={params.course}
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                What are you gonig to teach in this course?
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
