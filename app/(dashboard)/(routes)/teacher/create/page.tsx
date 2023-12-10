"use client";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
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
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
});

type ProfileFormValues = z.infer<typeof formSchema>;

export default function CreateCourse() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: ProfileFormValues) {
    try {
      const res = await axios.post("/api/courses", data);
      form.reset();
      router.push(`/teacher/course/${data.title}`);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data.error);
        toast.error(`${error.response.data.error}`);
      } else {
        toast.error("An Error occurred");
      }
    }
  }
  return (
    <main className="grid h-full w-full flex-col place-items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-xl rounded-md p-4"
        >
          <div className="my-6 text-left">
            <h1 className="text-2xl font-medium text-emerald-800">
              Give a name to your course
            </h1>
            <p className="text-slate-500">{`Don't worry you can change it later.`}</p>
          </div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input
                    className="lg:w-[500px]"
                    placeholder="e.g. JavaScript"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  What are you gonig to teach in this coruse
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <section className="flex w-full  justify-center gap-8 p-2 py-6">
            <Button
              onClick={() => {
                router.push("/teacher");
              }}
              variant={"outline"}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-500">
              Continue
            </Button>
          </section>
        </form>
      </Form>
    </main>
  );
}
