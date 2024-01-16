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

const createLessonTitleFormSchema = z.object({
  description: z
    .string()
    .min(2, {
      message: "Description must be at least 2 characters.",
    })
    .max(100, {
      message: "Description must not be longer than 100 characters.",
    }),
});

type ProfileFormValues = z.infer<typeof createLessonTitleFormSchema>;

type LessonIdProps = {
  id: string;
  description: string | null;
} | null;
export default function DescriptionForm({
  lessonData,
}: {
  lessonData: LessonIdProps;
}) {
  const form = useForm<z.infer<typeof createLessonTitleFormSchema>>({
    resolver: zodResolver(createLessonTitleFormSchema),
    defaultValues: {
      description: lessonData?.description ? lessonData?.description : "",
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
                  Describe your lesson in few words.
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
