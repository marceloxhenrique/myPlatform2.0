"use client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
});

type TitleFormValues = z.infer<typeof formSchema>;

export default function CreateCourse() {
  const router = useRouter();
  const form = useForm<TitleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(data: TitleFormValues) {
    router.push(`/teacher/create/${data.title}/`);
  }

  return (
    <main className=" w-full h-full flex flex-col items-center justify-center p-4">
      <section className="max-w-xl ">
        <h1 className="text-xl">Name your course</h1>
        <p className="text-base mb-6">
          {`Choose a name to your course, don't worry you can change it later `}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    What will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <section className="flex flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  router.push("/teacher");
                }}
                variant="outline"
                type="submit"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-600"
              >
                Create course
              </Button>
            </section>
          </form>
        </Form>
      </section>
    </main>
  );
}
