"use client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const createCourseTitleFormSchema = z.object({
  description: z
    .string()
    .min(2, {
      message: "Description must be at least 2 characters.",
    })
    .max(100, {
      message: "Description must not be longer than 100 characters.",
    }),
});

type ProfileFormValues = z.infer<typeof createCourseTitleFormSchema>;

type CourseIdProps = {
  id: string;
  description: string | null;
} | null;
export default function DescriptionForm({
  courseData,
}: {
  courseData: CourseIdProps;
}) {
  const form = useForm<z.infer<typeof createCourseTitleFormSchema>>({
    resolver: zodResolver(createCourseTitleFormSchema),
    defaultValues: {
      description: courseData?.description ? courseData?.description : "",
    },
  });
  const router = useRouter();
  async function onSubmit(data: ProfileFormValues) {
    try {
      await axios.patch(`/api/courses/${courseData?.id}`, data);
      router.refresh();
    } catch (error) {
      console.error("Error in onSubmit:", error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="my-2 rounded-md bg-slate-200 p-4 px-5 py-2">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="message-2">Description</Label>
                <FormControl>
                  <Textarea
                    placeholder="Type your description here."
                    id="message-2"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe your course in few words.
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
